# Hifumi — 个人静态图文博客

> Astro + Firefly 主题，纯静态、无后端、零运维的个人图文记录博客。

## 项目路径

| 目录/文件 | 用途 |
|-----------|------|
| `docs/requirements/` | 开发需求文档（功能需求、页面清单、内容体系） |
| `docs/tech/` | 技术规范（框架选型、配置标准、部署方案） |
| `docs/design/` | 设计规范（视觉标准、CSS 变量、动效参数） |
| `docs/steps/` | 执行步骤（分阶段实施计划、进度记录） |
| `devlog/` | 每日开发日志（YYYY-MM-DD.md，自动记录完成事项与待办） |

## 工作约定

1. **推进节奏**：一次只做一个阶段的任务，不跳跃、不冒进。每完成一个阶段性目标，更新 `docs/steps/` 对应文件并记录到当日 `devlog/`。
2. **修改优先**：优先编辑已有文件，避免新建不必要的文件。不做半成品实现。
3. **不引入额外依赖**：除非在 `docs/tech/` 中明确约定，否则不添加第三方库/插件。
4. **不改主题源码**：所有美化、配色、布局调整仅通过主题配置文件 + 自定义 CSS 实现。
5. **代码安全**：避免命令注入、XSS 等 OWASP 常见漏洞；静态站点不引入外部可执行脚本。
6. **提交前检查**：每次 Git 提交前确认 `draft: true` 的文章不在发布范围内，图片路径均为相对路径。
7. **开发日志**：每次会话结束时，在 `devlog/YYYY-MM-DD.md` 中记录当日完成事项和待办事项。如果当日文件已存在则追加，不存在则新建。

## 技术栈

- **框架**：Astro（静态输出）
- **主题**：Firefly / 流萤（https://github.com/CuteLeaf/Firefly），基于 Fuwari 二次开发，MIT 协议
- **搜索**：Pagefind（本地离线全文搜索）
- **托管**：Vercel / Netlify / Cloudflare Pages（免费静态托管）
- **图片**：Astro 原生优化（压缩、格式转换、尺寸适配），本地存储

## 核心约束

- 纯静态，无服务端代码
- 文章格式统一 Markdown/MDX，命名规范 `YYYY-MM-DD-标题.md`
- Frontmatter 使用 Firefly 原生字段：`title`, `published`, `category`, `tags`, `image`, `description`, `draft`
- 草稿通过 `draft: true` 控制，编译时自动过滤
- 特效仅使用 Firefly 内置，预留自定义扩展点
- 全站 HTTPS，静态资源缓存优化
