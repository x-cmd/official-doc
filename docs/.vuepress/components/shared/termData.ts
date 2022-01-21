import type { TerminalInfoType } from ".";

export const DEMO_INFO: Array<TerminalInfoType> = [
  {
    title: "x ls",
    textBtn: "x ls",
    isBanner: true,
    link: "/enhance/ls/",
    terminalInfo: [
      {
        delay: 300,
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
        delay: 1500,
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
    title: "x theme",
    textBtn: "x theme",
    isBanner: true,
    link: "/guide/theme/",
    terminalInfo: [
      {
        type: "input-output",
        key: "theme-1",
        inputValue: "x theme ls",
        outputValue: `
        <p class="leading-4 my-1">ys</p>
        <p class="leading-4 my-1">el</p>
        <p class="leading-4 my-1">pink</p>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "theme-2",
        inputValue: "x theme use ys",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-1 term-cyan">x-cmd</span>
          <span class="mr-1 term-bold term-yellow">~/project/src</span>
          <span class="mr-1">on</span>
          <span class="">git:</span><span class="mr-1 term-cyan">main</span>
          <span class="mr-1 term-yellow">x</span>
          <span class="mr-1">[12:00:00]</span>
        </p>
        <p class="leading-3 my-1">
          <span class="term-bold term-green">$</span>
          <span class="term-bold bg-gray-300">&nbsp;</span>
        </p>
        `
      }
    ]
  },
  {
    title: "x proxy",
    textBtn: "x proxy",
    isBanner: true,
    link: "/guide/proxy/",
    terminalInfo: [
      {
        type: "input-output",
        key: "proxy-1",
        inputValue: "x proxy apt url",
        outputValue: `
        <p>SUBCOMMANDS:</p>
        <p>
          <span class="term-cyan">ali</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold term-red">aliyun mirror url</span></br>
          <span class="term-cyan">tuna</span>&nbsp;&nbsp;&nbsp;<span class="bold term-red">tuna mirror url</span></br>
        </p>
        `
      },
      {
        delay: 1000,
        type: "input-output",
        key: "proxy-2",
        inputValue: "x proxy apt set tuna",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="term-yellow bold">[INF] proxy: </span>
          <span class="term-green">Setting proxy_apt mirror mirrors.tuna.tsinghua.edu.cn</span>
        </p>
        `
      }
    ]
  },
  {
    title: "x jq",
    textBtn: "x jq",
    isBanner: false,
    link: "/enhance/jq/",
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
    title: "x install",
    textBtn: "x install",
    isBanner: true,
    link: "/guide/install/",
    terminalInfo: [
      {
        type: "input-output",
        key: "install-1",
        inputValue: "x install ls | grep nvm",
        outputValue: `
        <p class="whitespace-nowrap">
          <span class="term-red bold">nvm</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold term-blue">Node version manager</span></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pr-4 ">> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</span></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="term-green">ref: https://github.com/nvm-sh/nvm/blob/master/install.sh</span></br>
        </p>
        `
      },
      {
        delay: 1500,
        type: "input-output",
        key: "install-2",
        inputValue: "x install nvm",
        outputValue: `
        <p class="leading-4 my-1 whitespace-nowrap">
        Executing command: <br/>
        > <span class="text-green-200 bold">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</span>
        </p>
        <p class="leading-4 whitespace-nowrap">
        <span class="term-yellow">? </span>Do you want to continue? Press y to continue, otherwise will abort: <span class="bold term-green">y</span><br/>
        => Downloading nvm from git to '/root/.nvm'
        </p>
        `
      }
    ]
  },
  {
    title: "x tldr",
    textBtn: "x tldr",
    isBanner: true,
    link: "/guide/tldr/",
    terminalInfo: [
      {
        type: "input-output",
        key: "tldr-1",
        inputValue: "x tldr cat tar",
        outputValue: `
        <p class="whitespace-nowrap">
          <span class="term-green">tar: </span><span class="term-yellow">Archiving utility.</span>
          <br>
          &nbsp;<span class="term-yellow bold">tar cf target.tar file1 file2 file3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="term-green bold">[c]reate an archive from [f]iles</span><br>

          &nbsp;<span class="bold">tar czf target.tar.gz file1 file2 file3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="term-green bold">[c]reate a g[z]ipped archive from [f]iles</span><br>

          &nbsp;<span class="term-yellow bold">tar czf target.tar.gz --directory=path/to/directory .</span>&nbsp;&nbsp;
          <span class="term-green bold">[c]reate a g[z]ipped archive from a directory using relative paths</span><br>

          &nbsp;<span class="bold">tar xf source.tar[.gz|.bz2|.xz]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="term-green bold">E[x]tract a (compressed) archive [f]ile into the current directory</span><br>

          &nbsp;<span class="term-yellow bold">tar xf source.tar[.gz|.bz2|.xz] --directory=directory</span>&nbsp;&nbsp;
          <span class="term-green bold">E[x]tract a (compressed) archive [f]ile into the target directory</span><br>

          &nbsp;<span class="bold">tar tvf source.tar</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="term-green bold">Lis[t] the contents of a tar [f]ile [v]erbosely</span><br>
        </p>
        `
      }
    ]
  },
  {
    title: "x advise",
    textBtn: "x advise",
    isBanner: true,
    link: "/guide/advise/",
    terminalInfo: [
      {
        type: "input-output",
        key: "advise-1",
        inputValue: "x advise man load npm",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-4"><span class="term-yellow bold">[INF] advise: </span>
          <span class="term-green">load npm command advise complate</span>
        </p>
        `
      },
      {
        delay: 1400,
        type: "input-output",
        key: "advise-2",
        inputValue: "npm ",
        outputValue: `
        <p class="leading-4 my-1">
          <span class="mr-2">access</span>
          <span class="mr-2">add</span>
          <span class="mr-2">adduser</span>
          <span class="mr-2">i</span>
          <span class="mr-2">install</span>
          <span class="mr-2">login</span>
        </p>
        <p class="leading-4 my-2">
          <span class="symbol font-extrabold text-green-500 text-xl">❯</span> npm
        </p>
        `
      }
    ]
  },
  {
    title: "x workspace",
    textBtn: "workspace",
    isBanner: true,
    link: "/guide/workspace/",
    terminalInfo: [
      {
        type: "input-output",
        key: "workspace-1",
        inputValue: "x ls -T -a",
        outputValue: `
        <p class="leading-4 -mt-6">
        .<br>
        ├── <span class="term-blue">.x-cmd</span> <br>
        │&nbsp;&nbsp;│<br>
        │&nbsp;&nbsp;└── <span class="term-red">hello</span> <br>
        ├── <span class="term-blue">src</span> <br>
        │<br>
        └── <span class="term-yellow underline">README.md</span>
        </p>
        `
      },
      {
        delay: 1200,
        type: "input-output",
        key: "workspace-2",
        inputValue: "x cat .x-cmd/hello",
        outputValue: `
        <p class="leading-4 -mt-4">
          <span class="mr-2 term-grey"># shellcheck shell=bash #xsh</span><br>
          <span class="mr-2 term-green">echo</span><span class="mr-2 term-yellow">"hello world!"</span><br>
        </p>
        `
      },
      {
        delay: 2500,
        type: "input-output",
        key: "workspace-3",
        inputValue: "x hello",
        outputValue: `
        <p class="leading-4 -mt-4">
          hello world
        </p>
        `
      }
    ]
  },
  {
    title: "x cowsay",
    textBtn: "cowsay",
    isBanner: false,
    link: "/guide/cowsay/",
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
  }
];
