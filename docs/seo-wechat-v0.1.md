# v0.1 SEO 与微信分享配置说明

日期：2026-07-20

## 当前目标

让 YICREDIT 官网在浏览器标签页、Google 收录、微信聊天和朋友圈分享时，显示统一的品牌标题、描述和小图。

## 已在代码中完成

- 顶部标签页 favicon：`apps/web/public/favicon.ico`
- PWA/搜索图标：`apps/web/public/icon.png`
- Apple 图标：`apps/web/public/apple-icon.png`
- 通用分享大图：`apps/web/public/assets/yicredit/seo/share-card-yicredit.png`
- 微信分享方图：`apps/web/public/wechat-share.png`
- `robots.txt`：允许搜索引擎抓取
- `sitemap.xml`：提供 `fr`、`zh`、`en` 页面入口
- 页面 `metadata`：补充 title、description、Open Graph、Twitter Card、canonical 和 hreflang
- 微信 JS-SDK 签名接口：`apps/web/app/api/wechat/signature/route.ts`

## 必须在微信后台配置

微信聊天和朋友圈缩略图不能只依赖网页代码稳定控制。要让标题、描述和图片稳定生效，需要公众号或服务号具备 JS-SDK 权限，并完成以下配置：

1. 登录微信公众平台。
2. 进入 `设置与开发` -> `公众号设置` -> `功能设置`。
3. 配置 `JS接口安全域名` 为：`www.yicredit.fr`
4. 域名不要写 `https://`，也不要写 `/fr`、`/zh`、`/en` 路径。
5. 按微信要求下载校验文件，并放到 `apps/web/public/` 根目录。
6. 部署后确认校验文件可通过 `https://www.yicredit.fr/校验文件名.txt` 访问。

## Vercel 环境变量

在 Vercel 项目中添加：

```bash
NEXT_PUBLIC_SITE_URL=https://www.yicredit.fr
WECHAT_MP_APP_ID=微信公众平台 AppID
WECHAT_MP_APP_SECRET=微信公众平台 AppSecret
```

添加或修改后需要重新部署。

## 微信缓存测试

微信会缓存旧分享卡片。每次调整后建议换一个测试链接：

```text
https://www.yicredit.fr/fr?share=1
https://www.yicredit.fr/zh?share=1
https://www.yicredit.fr/en?share=1
```

如果仍显示默认链接图标，优先检查：

- `JS接口安全域名` 是否是 `www.yicredit.fr`
- Vercel 环境变量是否已生效
- 校验文件是否可以公网访问
- 页面是否通过 `https` 访问
- 分享图片是否可访问：`https://www.yicredit.fr/wechat-share.png`

