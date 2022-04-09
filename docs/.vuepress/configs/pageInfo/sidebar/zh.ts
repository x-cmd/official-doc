import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/": [
    {
      text: "Guide",
      collapsible: false,
      // prettier-ignore
      children: [
        "/guide/README.md",
      ]
    },
    {
      text: "Basic Commands",
      collapsible: false,
      // prettier-ignore
      children: [
      "/guide/theme.md",
      "/guide/proxy.md",
      "/guide/install.md",
      "/guide/tldr.md",
      "/guide/advise.md",
      "/guide/env.md",
      "/guide/workspace.md",
      ]
    },
    {
      text: "Extension Commands",
      collapsible: false,
      // prettier-ignore
      children: [
        "/enhance/ls.md",
      ]
    }
  ],
  "/zh": [
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
      // prettier-ignore
      children: [
      "/zh/guide/theme.md",
      "/zh/guide/proxy.md",
      "/zh/guide/install.md",
      "/zh/guide/tldr.md",
      "/zh/guide/advise.md",
      "/zh/guide/env.md",
      "/zh/guide/workspace.md",
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
  ]
};
