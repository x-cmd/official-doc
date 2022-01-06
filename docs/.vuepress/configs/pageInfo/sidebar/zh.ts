import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/": [
    {
      text: "x-cmd 指南",
      // collapsible: true,
      // prettier-ignore
      children: [
        "/guide/README.md",
        "/guide/start.md",
        "/guide/theme.md",
        "/guide/proxy.md",
        "/guide/install.md",
        "/guide/tldr.md",
        "/guide/workspace.md",
      ]
    },
    {
      text: "x-cmd 增强命令",
      // collapsible: true,
      // prettier-ignore
      children: [
        "/enhance/ls.md",
        "/enhance/cd.md",
        "/enhance/du.md",
        "/enhance/cat.md",
      ]
    }
  ],
  "/helloword/": [
    {
      text: "Hello",
      collapsible: true,
      // prettier-ignore
      children: [
        "/helloword/README.md",
        "/helloword/helloword.md"
      ]
    }
  ]
};
