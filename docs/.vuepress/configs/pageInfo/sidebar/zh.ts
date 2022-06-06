import type { SidebarConfig } from "vuepress";

export const zh: SidebarConfig = [
  {
    text: "指南",
    collapsible: false,
    // prettier-ignore
    children: [
      "/guide/README.md",
    ]
  },
  {
    text: "基础命令",
    collapsible: false,
    children: [
      "/guide/theme.md",
      "/guide/proxy.md",
      "/guide/install.md",
      "/guide/tldr.md",
      "/guide/advise.md",
      "/guide/env.md",
      "/guide/workspace.md"
    ]
  },
  {
    text: "扩展命令",
    collapsible: false,
    // prettier-ignore
    children: [
      "/enhance/ls.md",
    ]
  }
];
