# 技术规范

## 一、运行环境

| 依赖 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | **22.x LTS** | Active LTS 至 2026.10 |
| pnpm | **≥ 9** | Firefly 推荐包管理器 |
| Git | **≥ 2.40** | 版本管理 + Cloudflare Pages 自动部署 |
| Astro | 跟随 Firefly 依赖 | 静态站点框架 |
| Tailwind CSS | 跟随 Firefly 依赖 | 样式框架 |

## 二、项目目录结构

```
Hifumi/
├── CLAUDE.md                 # AI 助手指引
├── README.md                 # 项目说明
├── robots.txt                # 爬虫屏蔽（Disallow: /）
├── .gitignore                # Git 忽略规则
├── astro.config.mjs          # Astro 配置（主题扩展点）
├── tailwind.config.js        # Tailwind 配置
├── package.json              # 依赖声明
├── pnpm-lock.yaml            # 锁文件
├── tsconfig.json             # TypeScript 配置
│
├── devlog/                   # 每日开发日志
│   └── YYYY-MM-DD.md
│
├── docs/                     # 项目文档
│   ├── requirements/         # 需求文档
│   ├── tech/                 # 技术规范（本文件）
│   ├── design/               # 设计规范
│   └── steps/                # 执行步骤
│
├── public/                   # 静态资源（不经过 Astro 处理）
│   ├── robots.txt
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── images/           # 图片资源
│   │       ├── covers/       # 文章封面图
│   │       ├── posts/        # 文章配图（按文章分文件夹）
│   │       └── site/         # 站点图片（Logo、背景、favicon）
│   │
│   ├── config/               # Firefly 主题配置（共 16 个文件）
│   │   ├── siteConfig.ts     # 站点基础配置
│   │   ├── profileConfig.ts  # 用户资料
│   │   ├── navBarConfig.ts   # 导航栏
│   │   ├── sidebarConfig.ts  # 侧边栏
│   │   ├── backgroundWallpaper.ts  # 背景壁纸
│   │   ├── fontConfig.ts     # 字体
│   │   ├── commentConfig.ts  # 评论（关闭）
│   │   ├── musicConfig.ts    # 音乐（关闭）
│   │   ├── pioConfig.ts      # 看板娘
│   │   ├── effectsConfig.ts  # 特效
│   │   ├── galleryConfig.ts  # 相册
│   │   ├── footerConfig.ts   # 页脚
│   │   ├── friendsConfig.ts  # 友链
│   │   ├── announcementConfig.ts  # 公告
│   │   ├── expressiveCodeConfig.ts # 代码高亮
│   │   └── adConfig.ts       # 广告（关闭）
│   │
│   ├── content/              # 文章内容
│   │   └── posts/            # Markdown/MDX 文章
│   │
│   ├── pages/                # 自定义页面
│   │   ├── about.astro       # 关于页
│   │   └── 404.astro         # 自定义 404
│   │
│   └── styles/               # 自定义样式（覆盖主题）
│       └── custom.css        # 自定义 CSS 入口
│
└── dist/                     # 构建输出（不纳入 Git）
```

## 三、配置文件清单

### 3.1 需要修改的核心配置

| 文件 | 修改内容 |
|------|----------|
| `siteConfig.ts` | 标题、语言 `zh_CN`、主题色 340-345（樱花粉） |
| `profileConfig.ts` | 极简个人资料 |
| `backgroundWallpaper.ts` | 全屏壁纸模式 + 日系背景图 |
| `navBarConfig.ts` | 首页、归档、标签、关于 |
| `pioConfig.ts` | 看板娘角色配置 |
| `effectsConfig.ts` | 开启樱花特效 |
| `footerConfig.ts` | 建站信息、版权 |
| `commentConfig.ts` | 关闭评论 |

### 3.2 保持关闭/默认的配置

| 文件 | 策略 |
|------|------|
| `commentConfig.ts` | 关闭（当前不启用） |
| `musicConfig.ts` | 关闭（按需开启） |
| `adConfig.ts` | 关闭 |
| `friendsConfig.ts` | 暂无友链 |
| `announcementConfig.ts` | 暂无公告 |

## 四、关键约束

1. **不改主题源码**：所有修改通过 `src/config/` 配置文件 + `src/styles/custom.css` 实现
2. **pnpm 为唯一包管理器**：不使用 npm 或 yarn，保证锁文件一致
3. **图片全本地化**：不依赖外部图床，全部纳入 Git
4. **Node 22 LTS**：不升级到更高版本，等 Node 24 进入 LTS 后再评估
5. **构建命令**：`pnpm build`，输出到 `dist/`，Cloudflare Pages 自动识别