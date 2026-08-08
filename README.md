# 彭宽的个人作品集

这个仓库托管在 GitHub Pages，用于展示项目、技术能力和求职信息。

- 前端：Astro + TypeScript + Tailwind CSS
- 部署：GitHub Actions + GitHub Pages
- 成本：不需要购买域名或服务器

站点地址：https://pengkuan4.github.io/

## 项目内容

项目卡片数据集中在 `src/data/portfolio.ts`。

- 修改项目标题、简介、技术栈和链接：编辑 `projectSlots`
- 上传项目截图：放到 `public/projects/`
- 关联截图：在对应项目中填写 `image: "/projects/文件名.png"`

## 本地开发

```bash
corepack enable
pnpm install
pnpm dev
```

## 发布

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages。
