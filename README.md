# 彭宽的个人小站

这个仓库托管在 GitHub Pages，用于介绍自己，也用于发布一些随想随记。

- 前端：Astro + TypeScript + Tailwind CSS
- 内容：个人介绍、随想随记、日常记录
- 部署：GitHub Actions + GitHub Pages
- 成本：不需要购买域名或服务器

站点地址：https://pengkuan4.github.io/

## 内容维护

站点文字集中在 `src/data/personal.ts`。

- 修改首页和关于页介绍：编辑 `person`、`homeMarks`、`quietTopics`
- 添加随想随记：访问 `/write/`，用 GitHub Token 提交；或手动在 `src/content/notes/` 新增 Markdown 文件
- 每篇随记的访问地址由 `slug` 决定，例如 `/notes/a-room-for-myself/`

## 本地开发

```bash
corepack enable
pnpm install
pnpm dev
```

## 发布

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages。
