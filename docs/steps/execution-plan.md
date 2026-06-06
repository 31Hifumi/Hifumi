# 执行计划

## 阶段总览

| 阶段 | 目标 | 状态 |
|------|------|------|
| 0 — 环境准备 | Node 22 + pnpm + Git 就绪 | ✅ 完成 |
| 1 — 项目骨架 | 克隆 Firefly、安装依赖、`pnpm dev` 跑通 | ✅ 完成 |
| 2 — 基础配置 | siteConfig、导航、关于页、404、robots.txt | ✅ 完成 |
| 3 — 视觉定制 | 配色、背景、看板娘、特效、磨砂遮罩 CSS | ✅ 完成 |
| 4 — 内容体系 | 分类、标签、示例文章、图片目录 | ✅ 完成 |
| 5 — 部署上线 | Netlify 连接、自动构建（替代 Cloudflare Pages） | ✅ 完成 |
| 6 — 收尾 | Git init、README、开发日志归档 | 🔄 进行中 |

---

## 阶段 5 — 部署上线

- [x] 创建 GitHub 仓库 `31Hifumi/Hifumi`
- [x] `git push -u origin master`
- [x] Netlify 连接仓库（替代 Cloudflare Pages）
- [x] 构建设置：`pnpm build`，输出 `dist/`，base 路径 `/`
- [x] 验证线上访问、HTTPS

## 阶段 6 — 收尾

- [x] README.md 定制
- [ ] 更新执行计划，标记全部完成
- [ ] 最终验证
