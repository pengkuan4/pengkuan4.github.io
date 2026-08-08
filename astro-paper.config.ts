import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://pengkuan4.github.io/",
    title: "彭宽 | 个人作品集",
    description: "面向求职展示的静态作品集，记录前端、自动化和项目交付。",
    author: "彭宽",
    profile: "https://github.com/pengkuan4",
    ogImage: "portfolio-og.png",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: false,
    editPost: {
      enabled: false,
    },
    search: false,
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/pengkuan4",
      linkTitle: "GitHub 主页",
    },
  ],
  shareLinks: [],
});
