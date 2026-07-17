# YICREDIT 品牌调色板 v0.1

日期：2026-07-17

## 来源

本调色板基于 `apps/web/public/02_海报.pdf` 与两张 YICREDIT 广告图提取并整理。整体方向保持广告稿中的深蓝、白底、浅灰信息层级和金色强调线，适合金融服务类静态展示网页。

## 12 色调色板

| Token | Hex | Tailwind 类名前缀 | 建议用途 |
| --- | --- | --- | --- |
| paper | `#FFFFFF` | `yi-paper` | 页面主背景、卡片底色、留白区域 |
| porcelain | `#F7F9FC` | `yi-porcelain` | 页面浅底、分区底色 |
| mist | `#EAF0F6` | `yi-mist` | 浅蓝灰背景、提示区、浅色徽标 |
| line | `#D1D7E0` | `yi-line` | 边框、分割线、输入框描边 |
| slate | `#858D97` | `yi-slate` | 次级文字、说明文字 |
| ink | `#05172E` | `yi-ink` | 正文主文字、深色背景 |
| night | `#05214A` | `yi-night` | 深色信息区、页脚、深色卡片 |
| navy | `#022A7A` | `yi-navy` | 品牌主色、主按钮、核心标题强调 |
| blue | `#0B4EA2` | `yi-blue` | 链接、按钮 hover、图标强调 |
| steel | `#59789D` | `yi-steel` | 辅助蓝、图表、次级按钮 |
| gold | `#D8B44A` | `yi-gold` | 重点分割线、徽章、可信背书强调 |
| bronze | `#967862` | `yi-bronze` | 温暖辅助色、状态提示、低频强调 |

## 使用规则

- 新页面、组件、按钮、边框和背景优先使用 `yi-*` Tailwind 色名。
- 不再直接使用 `blue-*`、`slate-*`、`indigo-*` 等默认色系，除非第三方组件无法覆盖。
- 主按钮使用 `yi-navy`，hover 或强调态使用 `yi-blue`。
- 页面大面积背景使用 `yi-paper`、`yi-porcelain`、`yi-mist`。
- 正文主文字使用 `yi-ink`，次级说明使用 `yi-slate`。
- 金色只做小面积强调，避免大面积铺色。

## 推荐组合

| 场景 | 背景 | 文字 | 强调 |
| --- | --- | --- | --- |
| 标准浅色页面 | `yi-paper` | `yi-ink` | `yi-navy` |
| 分区浅底 | `yi-porcelain` | `yi-ink` | `yi-blue` |
| 信息提示区 | `yi-mist` | `yi-ink` | `yi-gold` |
| 深色联系区 | `yi-night` | `yi-paper` | `yi-gold` |
| 页脚或权威背书 | `yi-ink` | `yi-mist` | `yi-steel` |

## 已落地位置

- `apps/web/lib/brand-palette.ts`
- `tailwind.config.ts`
- `apps/web/app/globals.css`
- `apps/web/components/providers.tsx`
