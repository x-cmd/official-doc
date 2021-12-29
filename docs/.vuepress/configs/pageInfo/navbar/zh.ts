import type { NavbarConfig } from "@vuepress/theme-default";

export const zh: NavbarConfig = [
  {
    text: "文档",
    link: "/helloword.md"
  },
  {
    text: "企业版",
    link: "/helloword.md"
  },
  {
    text: "更多模块",
    children: [
      {
        text: "Shell",
        // prettier-ignore
        children: [
          "/helloword.md"
        ]
      },
      {
        text: "Rust",
        // prettier-ignore
        children: [
          "/helloword/README.md"
        ]
      }
    ]
  }
];
