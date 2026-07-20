import { createHash, randomBytes } from "crypto";
import { NextResponse } from "next/server";

import { siteConfig } from "../../../../lib/seo";

type WechatAccessTokenResponse = {
  access_token?: string;
  expires_in?: number;
  errcode?: number;
  errmsg?: string;
};

type WechatTicketResponse = {
  ticket?: string;
  expires_in?: number;
  errcode?: number;
  errmsg?: string;
};

type CacheEntry = {
  value: string;
  expiresAt: number;
};

let accessTokenCache: CacheEntry | null = null;
let ticketCache: CacheEntry | null = null;

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function cacheIsValid(entry: CacheEntry | null) {
  return Boolean(entry && entry.expiresAt > Date.now() + 60_000);
}

async function getAccessToken(appId: string, appSecret: string) {
  if (accessTokenCache && cacheIsValid(accessTokenCache)) {
    return accessTokenCache.value;
  }

  const response = await fetch(
    `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${encodeURIComponent(
      appId
    )}&secret=${encodeURIComponent(appSecret)}`,
    { cache: "no-store" }
  );
  const data = (await response.json()) as WechatAccessTokenResponse;

  if (!data.access_token) {
    throw new Error(data.errmsg ?? "Failed to fetch WeChat access token");
  }

  accessTokenCache = {
    value: data.access_token,
    expiresAt: Date.now() + Math.max((data.expires_in ?? 7200) - 300, 60) * 1000
  };

  return accessTokenCache.value;
}

async function getJsApiTicket(accessToken: string) {
  if (ticketCache && cacheIsValid(ticketCache)) {
    return ticketCache.value;
  }

  const response = await fetch(
    `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${encodeURIComponent(
      accessToken
    )}&type=jsapi`,
    { cache: "no-store" }
  );
  const data = (await response.json()) as WechatTicketResponse;

  if (!data.ticket) {
    throw new Error(data.errmsg ?? "Failed to fetch WeChat JSAPI ticket");
  }

  ticketCache = {
    value: data.ticket,
    expiresAt: Date.now() + Math.max((data.expires_in ?? 7200) - 300, 60) * 1000
  };

  return ticketCache.value;
}

export async function GET(request: Request) {
  const appId = process.env.WECHAT_MP_APP_ID;
  const appSecret = process.env.WECHAT_MP_APP_SECRET;

  if (!appId || !appSecret) {
    return NextResponse.json({ enabled: false });
  }

  const requestUrl = new URL(request.url);
  const shareUrl = requestUrl.searchParams.get("url");
  if (!shareUrl) {
    return NextResponse.json({ enabled: false }, { status: 400 });
  }

  let parsedShareUrl: URL;
  try {
    parsedShareUrl = new URL(shareUrl);
  } catch {
    return NextResponse.json({ enabled: false }, { status: 400 });
  }

  const allowedHost = new URL(siteConfig.siteUrl).hostname;
  if (parsedShareUrl.protocol !== "https:" || parsedShareUrl.hostname !== allowedHost) {
    return NextResponse.json({ enabled: false }, { status: 400 });
  }

  const accessToken = await getAccessToken(appId, appSecret);
  const ticket = await getJsApiTicket(accessToken);
  const nonceStr = randomBytes(16).toString("hex");
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signatureBase = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${shareUrl}`;
  const signature = createHash("sha1").update(signatureBase).digest("hex");

  return NextResponse.json({
    enabled: true,
    appId,
    timestamp,
    nonceStr,
    signature
  });
}
