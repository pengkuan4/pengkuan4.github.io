export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  slot: string;
  title: string;
  status: string;
  summary: string;
  image?: string;
  stack: string[];
  links: PortfolioLink[];
};

export const profile = {
  name: "彭宽",
  role: "前端开发 / 自动化流程 / 静态站点",
  summary:
    "我把页面、流程和数据整理成可以直接展示、可以持续维护、可以在 GitHub Pages 上免费上线的作品。",
  availability: "当前站点正在整理作品集，后续会持续补充项目截图、链接和结果。",
  github: "https://github.com/pengkuan4",
};

export const heroStats = [
  { label: "部署", value: "GitHub Pages" },
  { label: "框架", value: "Astro + Tailwind" },
  { label: "成本", value: "0 服务器" },
];

export const projectSlots: PortfolioProject[] = [
  {
    slot: "01",
    title: "项目占位 01",
    status: "待上传",
    summary: "",
    stack: [],
    links: [],
  },
  {
    slot: "02",
    title: "项目占位 02",
    status: "待上传",
    summary: "",
    stack: [],
    links: [],
  },
  {
    slot: "03",
    title: "项目占位 03",
    status: "待上传",
    summary: "",
    stack: [],
    links: [],
  },
  {
    slot: "04",
    title: "项目占位 04",
    status: "待上传",
    summary: "",
    stack: [],
    links: [],
  },
  {
    slot: "05",
    title: "项目占位 05",
    status: "待上传",
    summary: "",
    stack: [],
    links: [],
  },
  {
    slot: "06",
    title: "项目占位 06",
    status: "待上传",
    summary: "",
    stack: [],
    links: [],
  },
];

export const featuredProjectSlots = projectSlots.slice(0, 3);

export const capabilityCards = [
  {
    title: "前端结构",
    summary: "把信息拆成适合扫读的层级，让主页先讲清楚你能做什么。",
  },
  {
    title: "静态交付",
    summary: "适合 GitHub Pages 的免费部署方式，不依赖域名或自建服务器。",
  },
  {
    title: "自动化",
    summary: "把重复流程变成可复用的项目，这类内容很适合做作品展示。",
  },
  {
    title: "持续迭代",
    summary: "预留项目位和模块位，后续补内容时不需要重做首页。",
  },
];

export const buildStack = [
  "Astro",
  "TypeScript",
  "Tailwind CSS",
  "GitHub Pages",
  "pnpm",
];

export const workflow = [
  {
    step: "01",
    title: "定义问题",
    summary: "先把项目目标、用户和结果讲明白。",
  },
  {
    step: "02",
    title: "搭好结构",
    summary: "用明确的页面块承载截图、链接、标签和复盘。",
  },
  {
    step: "03",
    title: "持续补充",
    summary: "后续上传项目时，只替换内容，不推翻首页。",
  },
];
