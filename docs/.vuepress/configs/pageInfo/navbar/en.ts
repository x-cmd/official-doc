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
  // {
  //   text: "企业版",
  //   link: "/helloword.md"
  // }
  // {
  //   text: "更多模块",
  //   children: [
  //     {
  //       text: "Shell",
  //       // prettier-ignore
  //       children: [
  //         "/helloword.md"
  //       ]
  //     },
  //     {
  //       text: "Rust",
  //       // prettier-ignore
  //       children: [
  //         "/helloword/README.md"
  //       ]
  //     }
  //   ]
  // }
];
