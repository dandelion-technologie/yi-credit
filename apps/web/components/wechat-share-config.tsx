"use client";

import { useEffect } from "react";

type WechatSignature = {
  enabled: boolean;
  appId?: string;
  timestamp?: string;
  nonceStr?: string;
  signature?: string;
};

type WechatSdk = {
  config: (options: {
    debug: boolean;
    appId: string;
    timestamp: string;
    nonceStr: string;
    signature: string;
    jsApiList: string[];
  }) => void;
  ready: (callback: () => void) => void;
  error: (callback: (error: unknown) => void) => void;
  updateAppMessageShareData?: (options: ShareOptions) => void;
  updateTimelineShareData?: (options: Omit<ShareOptions, "desc">) => void;
  onMenuShareAppMessage?: (options: ShareOptions) => void;
  onMenuShareTimeline?: (options: Omit<ShareOptions, "desc">) => void;
};

type ShareOptions = {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
};

type WechatShareConfigProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

declare global {
  interface Window {
    wx?: WechatSdk;
    __wechatSdkLoading?: Promise<void>;
  }
}

const sdkUrl = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";

function loadWechatSdk() {
  if (window.wx) {
    return Promise.resolve();
  }

  if (window.__wechatSdkLoading) {
    return window.__wechatSdkLoading;
  }

  window.__wechatSdkLoading = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = sdkUrl;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load WeChat JS-SDK"));
    document.head.appendChild(script);
  });

  return window.__wechatSdkLoading;
}

export function WechatShareConfig({ title, description, link, image }: WechatShareConfigProps) {
  useEffect(() => {
    if (!/MicroMessenger/i.test(navigator.userAgent)) {
      return;
    }

    let cancelled = false;
    const currentUrl = window.location.href.split("#")[0];

    async function configureShare() {
      const response = await fetch(`/api/wechat/signature?url=${encodeURIComponent(currentUrl)}`);
      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as WechatSignature;
      if (!data.enabled || !data.appId || !data.timestamp || !data.nonceStr || !data.signature) {
        return;
      }

      await loadWechatSdk();
      if (cancelled || !window.wx) {
        return;
      }

      window.wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
          "updateAppMessageShareData",
          "updateTimelineShareData",
          "onMenuShareAppMessage",
          "onMenuShareTimeline"
        ]
      });

      window.wx.ready(() => {
        const messageShare = { title, desc: description, link, imgUrl: image };
        const timelineShare = { title, link, imgUrl: image };

        window.wx?.updateAppMessageShareData?.(messageShare);
        window.wx?.updateTimelineShareData?.(timelineShare);
        window.wx?.onMenuShareAppMessage?.(messageShare);
        window.wx?.onMenuShareTimeline?.(timelineShare);
      });
    }

    configureShare().catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, [description, image, link, title]);

  return null;
}
