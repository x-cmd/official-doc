import type { SidebarConfig } from "vuepress";

export const en: SidebarConfig = [
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
      "/enhance/ls.md"
    ]
  }
];
