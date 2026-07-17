# YICREDIT 网站素材准备清单 v0.1

日期：2026-07-17

## 参考方向

参考站点：`https://www.lareserve-paris.com/en/`

视觉目标不是复制酒店内容，而是借鉴它的高级感网页结构：

- 首屏使用全屏大图或短视频，文字少而有分量。
- 导航克制，页面以滚动叙事推进。
- 分区留白充足，图片承担主要情绪和可信度。
- 服务内容不做密集堆叠，改用大图、短标题、少量说明。
- 底部提供明确联系入口，形成转化闭环。

结合 YICREDIT 现有海报，网页应呈现为“高端、可信、专业、面向在法中文客户的融资服务机构”，主色继续使用 `yi-*` 品牌调色板。

## 当前已有参考素材

| 路径 | 文件名后描述 |
| --- | --- |
| `apps/web/public/02_海报.pdf` | YICREDIT 综合服务海报 PDF，包含房产贷款、企业贷款、消费贷款、债务重组、联系方式、ORIAS/RCS 信息 |
| `apps/web/public/微信图片_20260717154608.jpg` | YICREDIT 综合服务长图海报，适合作为内容和版式参考，不建议直接作为网页主视觉 |
| `apps/web/public/微信图片_20260717154606.jpg` | 餐饮企业设备采购融资广告图，适合作为企业融资/设备融资内容参考 |

## 素材目录规范

请把新素材统一放到：

```text
apps/web/public/assets/yicredit/
```

建议目录结构：

```text
apps/web/public/assets/yicredit/
  brand/
  hero/
  services/
  process/
  trust/
  contact/
  video/
  poster/
```

文件命名规则：

- 使用英文小写、数字和中横线，例如 `hero-consultation-desktop.webp`。
- 不使用空格、中文括号、特殊符号。
- 图片优先提供 `.webp`，同时可保留原始 `.jpg`。
- 视频优先提供 `.mp4`，无声、短循环、体积控制在 8MB 以内。
- 不要把大段文字做进图片，网页文案后续用 HTML 渲染。

## 必备素材清单

### 1. 品牌基础

| 优先级 | 路径 | 文件名后描述 | 规格建议 | 用途 |
| --- | --- | --- | --- | --- |
| P0 | `apps/web/public/assets/yicredit/brand/logo-yicredit-primary.svg` | 深蓝 YICREDIT 主标志，透明背景 | SVG，横版和图形清晰 | 顶部导航、页脚、品牌露出 |
| P0 | `apps/web/public/assets/yicredit/brand/logo-yicredit-white.svg` | 白色 YICREDIT 标志，透明背景 | SVG | 深色首屏或深色页脚 |
| P0 | `apps/web/public/assets/yicredit/brand/logo-yicredit-symbol.svg` | YICREDIT 圆形 Y 图形标志 | SVG | favicon、移动端导航、加载状态 |
| P1 | `apps/web/public/assets/yicredit/brand/favicon.png` | 网站浏览器小图标 | 512x512 PNG | 浏览器标签页和分享预览 |

状态：以上品牌基础素材已生成到指定路径。

### 2. 首屏视觉

| 优先级 | 路径 | 文件名后描述 | 规格建议 | 场景描述 |
| --- | --- | --- | --- | --- |
| P0 | `apps/web/public/assets/yicredit/video/hero-finance-consultation-desktop.mp4` | 桌面端首屏背景视频，无声循环 | 1920x1080，8-12 秒，H.264 MP4 | 巴黎办公室或高端商务空间中，顾问与客户低声交流、查看融资材料，画面干净克制 |
| P0 | `apps/web/public/assets/yicredit/hero/hero-finance-consultation-desktop.webp` | 桌面端首屏视频备用图 | 2400x1350 WebP | 与首屏视频同场景，人物自然，左侧或中部预留文字空间 |
| P0 | `apps/web/public/assets/yicredit/hero/hero-finance-consultation-mobile.webp` | 移动端首屏图 | 1200x1600 WebP | 竖版商务咨询场景，主体不被顶部导航遮挡 |
| P1 | `apps/web/public/assets/yicredit/hero/hero-paris-business-address.webp` | 巴黎商务地址氛围图 | 2400x1350 WebP | 巴黎街区、金融办公室外立面或高端会议空间，用于“在巴黎的可信服务机构”叙事 |

状态：

- `hero-finance-consultation-desktop.webp` 已从首屏视频 1.5 秒画面生成，并加入深蓝渐变文字区。
- `hero-finance-consultation-mobile.webp` 已优化为 1200x1600。
- `hero-paris-business-address.webp` 已优化为 2400x1350。
- `hero-finance-consultation-desktop.mp4` 已压缩为 1920x1080、13.48 秒、约 2.6MB。

### 3. 服务场景

| 优先级 | 路径 | 文件名后描述 | 规格建议 | 场景描述 |
| --- | --- | --- | --- | --- |
| P0 | `apps/web/public/assets/yicredit/services/service-property-loan.webp` | 房产贷款服务图 | 1800x1200 WebP | 公寓楼、购房咨询、房产资料，不要出现其他品牌 logo |
| P0 | `apps/web/public/assets/yicredit/services/service-business-loan.webp` | 企业融资服务图 | 1800x1200 WebP | 企业主与顾问讨论经营资料、办公室或商业空间 |
| P0 | `apps/web/public/assets/yicredit/services/service-restaurant-equipment.webp` | 餐饮设备融资服务图 | 1800x1200 WebP | 餐厅后厨、烤箱、制冷设备、厨师或店主查看设备清单 |
| P0 | `apps/web/public/assets/yicredit/services/service-consumer-loan.webp` | 个人消费贷款服务图 | 1800x1200 WebP | 家庭、教育、车辆或生活消费规划，氛围可靠温和 |
| P0 | `apps/web/public/assets/yicredit/services/service-debt-restructuring.webp` | 债务重组服务图 | 1800x1200 WebP | 财务报表、计算器、现金流分析、顾问整理方案 |
| P1 | `apps/web/public/assets/yicredit/services/service-equipment-detail.webp` | 设备采购细节图 | 1800x1200 WebP | 商用设备、报价单、采购清单局部特写 |

状态：以上服务场景图片已统一优化为 1800x1200 WebP。房产贷款图因原图为超宽比例，已采用“完整主体 + 模糊背景填充”方式保留主要内容。

### 4. 流程叙事

| 优先级 | 路径 | 文件名后描述 | 规格建议 | 场景描述 |
| --- | --- | --- | --- | --- |
| P0 | `apps/web/public/assets/yicredit/process/process-consultation.webp` | 第一步咨询沟通图 | 1600x1000 WebP | 顾问与客户面对面沟通需求 |
| P0 | `apps/web/public/assets/yicredit/process/process-documents.webp` | 第二步材料准备图 | 1600x1000 WebP | 企业资料、银行流水、报价单、房产文件等材料整理 |
| P0 | `apps/web/public/assets/yicredit/process/process-bank-matching.webp` | 第三步融资机构匹配图 | 1600x1000 WebP | 顾问对比方案、渠道匹配、风险评估 |
| P0 | `apps/web/public/assets/yicredit/process/process-approval.webp` | 第四步审批落地图 | 1600x1000 WebP | 签署文件、项目推进、客户确认方案 |

状态：以上流程叙事图片已统一优化为 1600x1000 WebP。

### 5. 信任与资质

| 优先级 | 路径 | 文件名后描述 | 规格建议 | 场景描述 |
| --- | --- | --- | --- | --- |
| P0 | `apps/web/public/assets/yicredit/trust/trust-orias-registration.webp` | ORIAS 注册信息展示图 | 1600x1000 WebP | ORIAS 注册信息或证书截图，注意遮盖不应公开的隐私信息 |
| P0 | `apps/web/public/assets/yicredit/trust/trust-rcs-paris.webp` | RCS Paris 公司信息展示图 | 1600x1000 WebP | RCS 公司信息或注册资料截图，适合网页信任区展示 |
| P1 | `apps/web/public/assets/yicredit/trust/trust-partner-meeting.webp` | 金融机构沟通场景图 | 1800x1200 WebP | 与银行或金融机构沟通的商务场景，避免出现未经授权的机构商标 |
| P1 | `apps/web/public/assets/yicredit/trust/trust-document-detail.webp` | 专业文件细节图 | 1800x1200 WebP | 合规文件、印章、签字笔、资料夹局部，增强专业感 |

状态：本区块暂缓处理。当前阶段先完成网站 UI 初步构建，不生成或优化信任与资质素材。

### 6. 联系与转化

| 优先级 | 路径 | 文件名后描述 | 规格建议 | 场景描述 |
| --- | --- | --- | --- | --- |
| P0 | `apps/web/public/assets/yicredit/contact/qr-wechat-mr-victor.png` | 微信咨询二维码 | PNG，建议 1000x1000 | 清晰可扫码，来自当前海报的二维码请提供高清原图 |
| P0 | `apps/web/public/assets/yicredit/contact/contact-card-background.webp` | 联系区深色背景图 | 2400x1200 WebP | 深蓝调办公室、巴黎夜景或商务桌面，留出文字和二维码位置 |
| P1 | `apps/web/public/assets/yicredit/contact/contact-advisor-victor.webp` | 顾问头像或商务形象图 | 1200x1200 WebP | 如需展示顾问，请提供授权头像或正式商务照 |
| P1 | `apps/web/public/assets/yicredit/contact/contact-phone-email-icons.svg` | 电话、邮箱、微信线性图标 | SVG | 如果不用 lucide 图标，可提供与海报一致的线性图标 |

状态：

- `contact-card-background.webp` 已生成到指定路径，采用深蓝巴黎办公室夜景风格，左侧预留联系文案区域，右侧适合叠放二维码卡片。
- `qr-wechat-mr-victor.png` 已优化为 1000x1000 正方形二维码图。
- `contact-phone-email-icons.svg` 已生成，包含电话、邮箱、微信三枚品牌线性图标。
- `contact-advisor-victor.webp` 需要真实授权头像或商务照，当前不使用 AI 生成代替真人。

## 可选增强素材

这些素材用于接近参考站的高级滚动叙事效果，有素材会明显提升页面质感。

| 优先级 | 路径 | 文件名后描述 | 规格建议 | 场景描述 |
| --- | --- | --- | --- | --- |
| P2 | `apps/web/public/assets/yicredit/video/service-restaurant-equipment-loop.mp4` | 餐饮设备融资短视频 | 1920x1080，6-10 秒 | 餐厅后厨设备、店主检查设备、顾问记录需求 |
| P2 | `apps/web/public/assets/yicredit/video/service-documents-loop.mp4` | 文件审核短视频 | 1920x1080，6-10 秒 | 手翻资料、计算器、签字笔、财务报表局部 |
| P2 | `apps/web/public/assets/yicredit/poster/poster-general-services-original.webp` | 综合服务海报网页优化版 | 1200px 宽 WebP | 从现有综合海报导出的清晰图片，用于资料区或下载入口 |
| P2 | `apps/web/public/assets/yicredit/poster/poster-restaurant-equipment-original.webp` | 餐饮设备融资海报网页优化版 | 1200px 宽 WebP | 从现有餐饮设备海报导出的清晰图片，用于案例或资料下载 |
| P2 | `apps/web/public/assets/yicredit/hero/hero-paris-evening-exterior.webp` | 巴黎夜景或建筑外观氛围图 | 2400x1350 WebP | 用于页面尾部或品牌故事区，风格高级但不喧宾夺主 |
| P2 | `apps/web/public/assets/yicredit/services/service-case-cafe-owner.webp` | 餐饮企业主案例图 | 1800x1200 WebP | 咖啡店或餐厅经营者在店内规划升级 |

状态：

- `poster-general-services-original.webp` 已从现有综合服务海报生成，宽度 1200px。
- `poster-restaurant-equipment-original.webp` 已从现有餐饮设备融资海报生成，宽度 1200px。
- 服务短视频、巴黎夜景补充图、餐饮企业主案例图暂不生成，待 UI 初版确认后再决定是否需要。

## 页面与素材对应关系

| 页面区块 | 主要素材 | 备用素材 |
| --- | --- | --- |
| 首屏 Hero | `video/hero-finance-consultation-desktop.mp4` | `hero/hero-finance-consultation-desktop.webp`、`hero/hero-finance-consultation-mobile.webp` |
| 品牌故事 | `hero/hero-paris-business-address.webp` | `trust/trust-partner-meeting.webp` |
| 服务分类 | `services/service-property-loan.webp`、`services/service-business-loan.webp`、`services/service-restaurant-equipment.webp`、`services/service-consumer-loan.webp`、`services/service-debt-restructuring.webp` | `services/service-equipment-detail.webp` |
| 流程说明 | `process/process-consultation.webp`、`process/process-documents.webp`、`process/process-bank-matching.webp`、`process/process-approval.webp` | `video/service-documents-loop.mp4` |
| 资质信任 | `trust/trust-orias-registration.webp`、`trust/trust-rcs-paris.webp` | `trust/trust-document-detail.webp` |
| 联系咨询 | `contact/qr-wechat-mr-victor.png`、`contact/contact-card-background.webp` | `contact/contact-advisor-victor.webp` |

## 素材质量要求

- 图片必须清晰，避免微信压缩后的小图直接作为首屏素材。
- 人物照片需要确认可商用、可公开展示。
- 涉及客户资料、银行资料、证书截图时，先遮盖隐私信息。
- 图片中不要出现不相关品牌、银行 logo 或敏感个人信息。
- 首屏图和服务图要预留文字空间，避免主体占满画面。
- 风格应保持 YICREDIT 的深蓝、白、浅灰和少量金色强调，不使用杂乱高饱和色。

## 准备顺序

1. 先准备 `brand/`、`hero/`、`contact/` 的 P0 素材。
2. 再准备五类服务图：房产、企业、餐饮设备、消费、债务重组。
3. 然后补流程图和资质信任图。
4. 最后根据页面效果决定是否补充短视频和案例图。
