import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/": [
    {
      text: "markdown语法效果展示",
      collapsible: true,
      // prettier-ignore
      children: [
        "/helloword.md"
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
