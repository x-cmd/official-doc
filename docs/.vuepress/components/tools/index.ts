import type { DemoInfoType } from "../types";

export const DEMO_INFO: Array<DemoInfoType> = [
  {
    title: "x cowsay",
    textBtn: "cowsay",
    link: "/helloword.html",
    describe: "哞哞哞哞哞哞哞哞哞哞哞哞",
    terminalInfo: [
      {
        type: "input",
        key: "cowsay-1",
        inputValue: "xrc cowsay"
      },
      {
        delay: 1000,
        type: "input-output",
        key: "cowsay-2",
        inputValue: "cowsay hello world",
        outputValue: `
        <p class="leading-4 my-1" style="color: cyan"> ----------------------</p>
        <p class="leading-4 my-1" style="color: cyan"> < hello world ></p>
        <p class="leading-4 my-1" style="color: cyan"> ----------------------</p>
        <p class="leading-4 my-2 whitespace-pre tracking-widest" style="color: cyan">          ^__^</p>
        <p class="leading-4 my-2 whitespace-pre tracking-widest" style="color: cyan">          (oo)\\______</p>
        <p class="leading-4 my-2 whitespace-pre tracking-widest" style="color: cyan">          (__)\\      )\\/\\</p>
        <p class="leading-4 my-2 whitespace-pre tracking-widest" style="color: cyan">             ||-----w |</p>
        <p class="leading-4 my-2 whitespace-pre tracking-widest" style="color: cyan">             ||      ||</p>
        `
      }
    ]
  },
  {
    title: "x json",
    textBtn: "| json_*",
    describe: "查询，操作json文件",
    link: "/helloword/",
    terminalInfo: [
      {
        type: "input",
        key: "json-1",
        inputValue: "xrc json"
      },
      {
        delay: 1000,
        type: "input-output",
        key: "json-2",
        inputValue: "cat ./helloworld.json | json_color",
        outputValue: `
            <p class="leading-4 my-2 whitespace-pre">{</p>
            <p class="leading-4 my-2 whitespace-pre">&nbsp;&nbsp;<span style="color: cyan">"word"</span><span>:&nbsp;"hello world"</span></p>
            <p class="leading-4 my-2 whitespace-pre">}</p>
          `
      }
    ]
  }
];
