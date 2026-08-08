import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "项目",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布时间",
    updatedAt: "更新于",
    sharePostIntro: "分享这篇内容：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过邮件分享",
    tagLabel: "标签",
    backToTop: "回到顶部",
    goBack: "返回",
    editPage: "编辑此页",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "第",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选",
    recentPosts: "最新内容",
    allPosts: "查看全部",
  },
  footer: {
    copyright: "彭宽",
    allRightsReserved: "保留所有权利",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "按标签整理的内容。",

    tagsTitle: "标签",
    tagsDesc: "站点中使用过的所有标签。",

    postsTitle: "项目",
    postsDesc: "当前站点预留的项目展示位。",

    archivesTitle: "归档",
    archivesDesc: "按时间整理的记录。",

    searchTitle: "搜索",
    searchDesc: "在站点中查找内容。",
  },
  a11y: {
    skipToContent: "跳到正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索内容...",
    noResults: "没有找到结果",
    goToPreviousPage: "前往上一页",
    goToNextPage: "前往下一页",
  },
  notFound: {
    title: "404 未找到",
    message: "页面不存在",
    goHome: "返回首页",
  },
} satisfies UIStrings;
