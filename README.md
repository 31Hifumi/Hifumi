# Hifumi

> 记录日常的个人空间。

[![Netlify Status](https://api.netlify.com/api/v1/badges/1e0e3b7a-7a0e-4cef-aeb5-3d1f3b7a0e0c/deploy-status)](https://app.netlify.com/sites/rainbow-faun-87f4bc/deploys)

## 关于

Hifumi 是一个个人静态图文博客，记录日常随笔、图集分享与读书笔记。

基于 [Firefly](https://github.com/CuteLeaf/Firefly) 主题构建，托管于 Netlify。

## 技术栈

- **框架**：Astro（静态生成）
- **主题**：Firefly（基于 Fuwari 二次开发）
- **搜索**：Pagefind 离线全文搜索
- **托管**：Netlify

## 本地开发

```bash
# 环境要求：Node.js >= 22, pnpm >= 9

pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # 构建到 dist/
```

## 文章规范

文章存放在 `src/content/posts/`，文件名格式 `YYYY-MM-DD-标题.md`，Frontmatter 使用 Firefly 原生字段：

```yaml
---
title: 文章标题
published: YYYY-MM-DD
category: 分类名称
tags: [标签1, 标签2]
image: 封面图路径
description: 文章摘要
draft: false
---
```

## 目录结构

```
src/
├── config/       # 站点配置
├── content/      # 文章内容
├── assets/       # 图片素材
└── styles/       # 自定义样式
```

## 许可

代码基于 [MIT License](./LICENSE)，文章内容保留所有权利。

## 致谢

- [Firefly](https://github.com/CuteLeaf/Firefly) — Astro 博客主题
- [Fuwari](https://github.com/saicaca/fuwari) — 原始模板