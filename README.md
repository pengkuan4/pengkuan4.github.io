# 彭宽

托管在 GitHub Pages 的极简个人文字站，用于发布随想和日记。

站点地址：https://pengkuan4.github.io/

## 新增文章

文章放在 `src/content/notes/`。

1. 在 `src/content/notes/` 新建一个 Markdown 文件，例如 `new-note.md`。
2. 文件名就是文章地址，例如 `new-note.md` 会生成 `/notes/new-note/`。
3. 文件内容按下面格式写：

```md
---
title: "文章标题"
date: "2026.10.03"
datetime: "2026-10-03"
---

这里写正文。

空一行就是新的段落。
```

4. 写完后运行 `pnpm run build` 检查。
5. 推送到 `main` 后，GitHub Pages 会自动发布。

## 本地开发

```bash
corepack enable
pnpm install
pnpm dev
```
