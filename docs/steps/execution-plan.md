# 执行计划

## 阶段总览

| 阶段 | 目标 | 状态 |
|------|------|------|
| 0 — 环境准备 | Node 22 + pnpm + Git 就绪 | ⏳ 进行中 |
| 1 — 项目骨架 | 克隆 Firefly、安装依赖、`pnpm dev` 跑通 | ⏳ |
| 2 — 基础配置 | siteConfig、导航、关于页、404、robots.txt | ⏳ |
| 3 — 视觉定制 | 配色、背景、看板娘、特效、磨砂遮罩 CSS | ⏳ |
| 4 — 内容体系 | 分类、标签、示例文章、图片目录 | ⏳ |
| 5 — 部署上线 | Cloudflare Pages 连接、自动构建 | ⏳ |
| 6 — 收尾 | Git init、README、开发日志归档 | ⏳ |

---

## 阶段 0 — 环境准备

**目标**：Node.js 22 LTS + pnpm ≥ 9 + Git 可用

- [ ] 安装 Node.js 22 LTS
- [ ] 验证 `node -v` 输出 v22.x
- [ ] 安装 pnpm：`corepack enable && corepack prepare pnpm@latest --activate`
- [ ] 验证 `pnpm -v` 输出 ≥ 9
- [ ] 验证 `git --version`

## 阶段 1 — 项目骨架

**目标**：在 `E:\Hifumi\web\Hifumi\` 内克隆 Firefly，`pnpm dev` 成功启动

- [ ] `git clone https://github.com/CuteLeaf/Firefly.git` 到临时目录
- [ ] 将 Firefly 文件迁移到项目根目录（保留 `devlog/`、`docs/`、`CLAUDE.md`）
- [ ] `pnpm install`
- [ ] `pnpm dev` → 浏览器访问 `http://localhost:4321` 确认主题正常运行
- [ ] 清理示例文章（保留目录结构）

## 阶段 2 — 基础配置

**目标**：站点身份确立，核心页面就位

- [ ] `siteConfig.ts`：标题、描述、语言 `zh_CN`
- [ ] `navBarConfig.ts`：首页 / 归档 / 标签 / 关于
- [ ] `profileConfig.ts`：极简资料
- [ ] `footerConfig.ts`：建站时间、版权信息
- [ ] `commentConfig.ts`：评论关闭
- [ ] `adConfig.ts`：广告关闭
- [ ] `src/pages/about.astro`：极简关于页
- [ ] `public/robots.txt`：`Disallow: /`
- [ ] 自定义 404 页面

## 阶段 3 — 视觉定制

**目标**：日系粉蓝暖色调 + 动漫装饰

- [ ] `siteConfig.ts`：色相设为 340-345（樱花粉）
- [ ] `backgroundWallpaper.ts`：全屏壁纸模式
- [ ] 准备日系动漫背景图 → `src/assets/images/site/`
- [ ] `src/styles/custom.css`：磨砂玻璃遮罩
- [ ] `effectsConfig.ts`：开启樱花特效
- [ ] `pioConfig.ts`：看板娘配置
- [ ] 暗色模式验证（深蓝底 + 粉蓝文字）
- [ ] 移动端布局检查

## 阶段 4 — 内容体系

**目标**：可用的创作环境

- [ ] `src/assets/images/` 目录结构就位（covers / posts / site）
- [ ] `src/content/posts/` 创建第一篇示例文章
- [ ] Frontmatter 模板验证（所有字段可用）
- [ ] 三大分类配置验证
- [ ] Pagefind 搜索验证
- [ ] 草稿隔离验证（draft: true 不发布）

## 阶段 5 — 部署上线

**目标**：Cloudflare Pages 自动部署

- [ ] 创建 GitHub 远程仓库
- [ ] 连接 Cloudflare Pages → 仓库
- [ ] 构建配置：`pnpm build`，输出目录 `dist/`
- [ ] 推送触发自动构建
- [ ] 验证线上访问正常、HTTPS 生效
- [ ] 验证 robots.txt 正确返回

## 阶段 6 — 收尾

**目标**：版本管理就位，文档归档

- [ ] `git init` + 首次提交
- [ ] 推送至远程仓库
- [ ] README.md 编写
- [ ] 开发日志归档
