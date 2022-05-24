import type { NavbarConfig } from "vuepress";

export const en: NavbarConfig = [
  {
    text: "Guide",
    link: "/guide/README.md"
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
