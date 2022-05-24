import type { SidebarConfig } from "vuepress";

export const zh: SidebarConfig = [
  {
    text: "指南",
    collapsible: false,
    // prettier-ignore
    children: [
      "/zh/guide/README.md",
    ]
  },
  {
    text: "基础命令",
    collapsible: false,
    children: [
      "/zh/guide/theme.md",
      "/zh/guide/proxy.md",
      "/zh/guide/install.md",
      "/zh/guide/tldr.md",
      "/zh/guide/advise.md",
      "/zh/guide/env.md",
      "/zh/guide/workspace.md"
    ]
  },
  {
    text: "扩展命令",
    collapsible: false,
    // prettier-ignore
    children: [
      "/zh/enhance/ls.md",
    ]
  }
];
