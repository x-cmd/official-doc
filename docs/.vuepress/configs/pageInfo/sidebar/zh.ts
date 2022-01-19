import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/": [
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
      // prettier-ignore
      children: [
      "/guide/theme.md",
      "/guide/proxy.md",
      "/guide/install.md",
      "/guide/tldr.md",
      "/guide/advise.md",
      "/guide/workspace.md",
      ]
    },
    {
      text: "扩展命令",
      collapsible: false,
      // prettier-ignore
      children: [
        "/enhance/ls.md",
        // "/enhance/cd.md",
        // "/enhance/du.md",
        // "/enhance/cat.md",
        // "/enhance/jq.md",
        // "/enhance/yq.md",
        // "/enhance/nmap.md",
        // "/enhance/openssl.md",
      ]
    }
  ]
};
