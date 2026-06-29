# 彭宽的博客

这个仓库托管我的 GitHub Pages 个人博客：

https://pengkuan4.github.io/

博客基于 [AstroPaper](https://github.com/satnaing/astro-paper) 搭建，使用 Astro 生成静态站点，并通过 GitHub Actions 部署到 GitHub Pages。

## 本地开发

```bash
corepack enable
pnpm install
pnpm dev
```

## 发布

合并到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages。
