import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://pengkuan4.github.io/",
    title: "彭宽",
    description: "彭宽的随想和日记。",
    author: "彭宽",
    profile: "https://github.com/pengkuan4",
    ogImage: "favicon.svg",
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
