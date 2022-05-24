import type { NavbarConfig } from "vuepress";

export const zh: NavbarConfig = [
  {
    text: "文档",
    link: "/zh/guide/README.md"
  },
  {
    text: "项目地址",
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
