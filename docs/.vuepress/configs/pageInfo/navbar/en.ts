import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Document",
    link: "/en/guide/README.md"
  },
  {
    text: "Project Address",
    children: [
      {
        text: "Github",
        // prettier-ignore
        link:"https://github.com/x-cmd/x-cmd"
      },
      {
        text: "Gitee",
        // prettier-ignore
        link:"https://gitee.com/x-cmd/x-cmd"
      }
    ]
  }
];
