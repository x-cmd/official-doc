import type { TerminalInfoType } from ".";

export const DEMO_INFO: Array<TerminalInfoType> = [
  {
    title: "x ls",
    textBtn: "x ls",
    isBanner: true,
    link: "/enhance/ls.html",
    describe: "显示文件目录信息",
    terminalInfo: [
      {
        type: "input-output",
        key: "ls-1",
        inputValue: "x ls",
        outputValue: `
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">src</span>
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">dist</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">README.md</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">Makefile</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">package.json</span>
        <span class="leading-4 my-1 mr-2 text-pink-500">logo.png</span>
        <span class="leading-4 my-1 mr-2">data.json</span>
        <span class="leading-4 my-1 mr-2">install.sh</span>
        <span class="leading-4 my-1 mr-2">demo.js</span>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "ls-2",
        inputValue: "x ll",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-blue-500">d</span><span class="text-yellow-200">r</span><span class="text-red-400">w</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span></span>
          <span class="mr-2">&nbsp;&nbsp;&nbsp;-</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-blue-500 font-bold">src</span>
        </p>
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-yellow-200">.r</span><span class="text-red-400">w</span><span class="text-green-200">-</span><span class="text-yellow-200">r</span><span>--</span><span class="text-yellow-200">r</span><span>--</span></span>
          <span class="mr-2 text-green-200">3.3k</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-yellow-200 underline font-bold">package.json</span>
        </p>
        `
      }
    ]
  },
  {
    title: "x cowsay",
    textBtn: "cowsay",
    isBanner: true,
    link: "/enhance/cowsay.html",
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
    title: "json",
    textBtn: "json",
    isBanner: false,
    describe: "查询，操作json文件",
    link: "/core/json.html",
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
        inputValue: "cat ./helloworld.json | json color",
        outputValue: `
            <p class="leading-4 my-2 whitespace-span">{</p>
            <p class="leading-4 my-2 whitespace-span">&nbsp;&nbsp;<span style="color: cyan">"word"</span><span>:&nbsp;"hello world"</span></p>
            <p class="leading-4 my-2 whitespace-span">}</p>
          `
      }
    ]
  },
  {
    title: "x theme",
    textBtn: "x theme",
    isBanner: true,
    link: "/enhance/ls.html",
    describe: "显示文件目录信息",
    terminalInfo: [
      {
        type: "input-output",
        key: "theme-1",
        inputValue: "x ls",
        outputValue: `
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">src</span>
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">dist</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">README.md</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">Makefile</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">package.json</span>
        <span class="leading-4 my-1 mr-2 text-pink-500">logo.png</span>
        <span class="leading-4 my-1 mr-2">data.json</span>
        <span class="leading-4 my-1 mr-2">install.sh</span>
        <span class="leading-4 my-1 mr-2">demo.js</span>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "theme-2",
        inputValue: "x ll",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-blue-500">d</span><span class="text-yellow-200">r</span><span class="text-red-400">w</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span></span>
          <span class="mr-2">&nbsp;&nbsp;&nbsp;-</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-blue-500 font-bold">src</span>
        </p>
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-yellow-200">.r</span><span class="text-red-400">w</span><span class="text-green-200">-</span><span class="text-yellow-200">r</span><span>--</span><span class="text-yellow-200">r</span><span>--</span></span>
          <span class="mr-2 text-green-200">3.3k</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-yellow-200 underline font-bold">package.json</span>
        </p>
        `
      }
    ]
  },
  {
    title: "x tldr",
    textBtn: "x tldr",
    isBanner: true,
    link: "/enhance/ls.html",
    describe: "显示文件目录信息",
    terminalInfo: [
      {
        type: "input-output",
        key: "tldr-1",
        inputValue: "x ls",
        outputValue: `
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">src</span>
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">dist</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">README.md</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">Makefile</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">package.json</span>
        <span class="leading-4 my-1 mr-2 text-pink-500">logo.png</span>
        <span class="leading-4 my-1 mr-2">data.json</span>
        <span class="leading-4 my-1 mr-2">install.sh</span>
        <span class="leading-4 my-1 mr-2">demo.js</span>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "tldr-2",
        inputValue: "x ll",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-blue-500">d</span><span class="text-yellow-200">r</span><span class="text-red-400">w</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span></span>
          <span class="mr-2">&nbsp;&nbsp;&nbsp;-</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-blue-500 font-bold">src</span>
        </p>
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-yellow-200">.r</span><span class="text-red-400">w</span><span class="text-green-200">-</span><span class="text-yellow-200">r</span><span>--</span><span class="text-yellow-200">r</span><span>--</span></span>
          <span class="mr-2 text-green-200">3.3k</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-yellow-200 underline font-bold">package.json</span>
        </p>
        `
      }
    ]
  },
  {
    title: "x proxy",
    textBtn: "x proxy",
    isBanner: true,
    link: "/enhance/ls.html",
    describe: "显示文件目录信息",
    terminalInfo: [
      {
        type: "input-output",
        key: "proxy-1",
        inputValue: "x ls",
        outputValue: `
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">src</span>
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">dist</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">README.md</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">Makefile</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">package.json</span>
        <span class="leading-4 my-1 mr-2 text-pink-500">logo.png</span>
        <span class="leading-4 my-1 mr-2">data.json</span>
        <span class="leading-4 my-1 mr-2">install.sh</span>
        <span class="leading-4 my-1 mr-2">demo.js</span>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "proxy-2",
        inputValue: "x ll",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-blue-500">d</span><span class="text-yellow-200">r</span><span class="text-red-400">w</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span></span>
          <span class="mr-2">&nbsp;&nbsp;&nbsp;-</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-blue-500 font-bold">src</span>
        </p>
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-yellow-200">.r</span><span class="text-red-400">w</span><span class="text-green-200">-</span><span class="text-yellow-200">r</span><span>--</span><span class="text-yellow-200">r</span><span>--</span></span>
          <span class="mr-2 text-green-200">3.3k</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-yellow-200 underline font-bold">package.json</span>
        </p>
        `
      }
    ]
  },
  {
    title: "x install",
    textBtn: "x install",
    isBanner: true,
    link: "/enhance/ls.html",
    describe: "显示文件目录信息",
    terminalInfo: [
      {
        type: "input-output",
        key: "install-1",
        inputValue: "x ls",
        outputValue: `
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">src</span>
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">dist</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">README.md</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">Makefile</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">package.json</span>
        <span class="leading-4 my-1 mr-2 text-pink-500">logo.png</span>
        <span class="leading-4 my-1 mr-2">data.json</span>
        <span class="leading-4 my-1 mr-2">install.sh</span>
        <span class="leading-4 my-1 mr-2">demo.js</span>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "install-2",
        inputValue: "x ll",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-blue-500">d</span><span class="text-yellow-200">r</span><span class="text-red-400">w</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span></span>
          <span class="mr-2">&nbsp;&nbsp;&nbsp;-</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-blue-500 font-bold">src</span>
        </p>
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-yellow-200">.r</span><span class="text-red-400">w</span><span class="text-green-200">-</span><span class="text-yellow-200">r</span><span>--</span><span class="text-yellow-200">r</span><span>--</span></span>
          <span class="mr-2 text-green-200">3.3k</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-yellow-200 underline font-bold">package.json</span>
        </p>
        `
      }
    ]
  },
  {
    title: "x advise",
    textBtn: "x advise",
    isBanner: true,
    link: "/enhance/ls.html",
    describe: "显示文件目录信息",
    terminalInfo: [
      {
        type: "input-output",
        key: "advise-1",
        inputValue: "x ls",
        outputValue: `
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">src</span>
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">dist</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">README.md</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">Makefile</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">package.json</span>
        <span class="leading-4 my-1 mr-2 text-pink-500">logo.png</span>
        <span class="leading-4 my-1 mr-2">data.json</span>
        <span class="leading-4 my-1 mr-2">install.sh</span>
        <span class="leading-4 my-1 mr-2">demo.js</span>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "advise-2",
        inputValue: "x ll",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-blue-500">d</span><span class="text-yellow-200">r</span><span class="text-red-400">w</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span></span>
          <span class="mr-2">&nbsp;&nbsp;&nbsp;-</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-blue-500 font-bold">src</span>
        </p>
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-yellow-200">.r</span><span class="text-red-400">w</span><span class="text-green-200">-</span><span class="text-yellow-200">r</span><span>--</span><span class="text-yellow-200">r</span><span>--</span></span>
          <span class="mr-2 text-green-200">3.3k</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-yellow-200 underline font-bold">package.json</span>
        </p>
        `
      }
    ]
  },
  {
    title: "x cat",
    textBtn: "x cat",
    isBanner: true,
    link: "/enhance/ls.html",
    describe: "显示文件目录信息",
    terminalInfo: [
      {
        type: "input-output",
        key: "cat-1",
        inputValue: "x ls",
        outputValue: `
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">src</span>
        <span class="leading-4 my-1 mr-2 text-blue-500 font-bold">dist</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">README.md</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">Makefile</span>
        <span class="leading-4 my-1 mr-2 text-yellow-200 underline font-bold">package.json</span>
        <span class="leading-4 my-1 mr-2 text-pink-500">logo.png</span>
        <span class="leading-4 my-1 mr-2">data.json</span>
        <span class="leading-4 my-1 mr-2">install.sh</span>
        <span class="leading-4 my-1 mr-2">demo.js</span>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "cat-2",
        inputValue: "x ll",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-blue-500">d</span><span class="text-yellow-200">r</span><span class="text-red-400">w</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span><span class="text-yellow-200">r</span><span>-</span><span class="text-green-200">x</span></span>
          <span class="mr-2">&nbsp;&nbsp;&nbsp;-</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-blue-500 font-bold">src</span>
        </p>
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="text-yellow-200">.r</span><span class="text-red-400">w</span><span class="text-green-200">-</span><span class="text-yellow-200">r</span><span>--</span><span class="text-yellow-200">r</span><span>--</span></span>
          <span class="mr-2 text-green-200">3.3k</span>
          <span class="mr-2 text-yellow-200 font-bold">x-cmd</span>
          <span class="mr-2 text-blue-600">20</span>
          <span class="mr-2 text-blue-600">12</span>
          <span class="mr-2 text-blue-600">2021</span>
          <span class="mr-2 text-yellow-200 underline font-bold">package.json</span>
        </p>
        `
      }
    ]
  }
];
