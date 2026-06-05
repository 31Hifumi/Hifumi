# 执行计划

## 阶段总览

| 阶段 | 目标 | 状态 |
|------|------|------|
| 0 — 环境准备 | Node 22 + pnpm + Git 就绪 | ✅ 完成 |
| 1 — 项目骨架 | 克隆 Firefly、安装依赖、`pnpm dev` 跑通 | ✅ 完成 |
| 2 — 基础配置 | siteConfig、导航、关于页、404、robots.txt | ✅ 完成 |
| 3 — 视觉定制 | 配色、背景、看板娘、特效、磨砂遮罩 CSS | ✅ 完成 |
| 4 — 内容体系 | 分类、标签、示例文章、图片目录 | ✅ 完成 |
| 5 — 部署上线 | Cloudflare Pages 连接、自动构建 | ⏳ 待做 |
| 6 — 收尾 | Git init、README、开发日志归档 | ⏳ 待做 |

---

## 阶段 5 — 部署上线（下次继续）

**前置条件**：需要在 GitHub 创建空仓库，获取远程 URL。

- [ ] 用户创建 GitHub 仓库（建议命名 `Hifumi` 或 `hifumi-blog`）
- [ ] `git remote add origin <仓库URL>`
- [ ] `git push -u origin master`
- [ ] Cloudflare Pages Dashboard → 连接仓库
- [ ] 构建设置：`pnpm build`，输出 `dist/`
- [ ] 验证线上访问、HTTPS、robots.txt

## 阶段 6 — 收尾（下次继续）

- [ ] README.md 定制
- [ ] 开发日志归档
- [ ] 最终验证
