---
title: workspace
description: x-cmd workspace 工作区脚本, 脚本管理项目，轻松搞定代码项目管理
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x workspace

<Terminal :termIndex="7"/>

## Summary

==x [ Script file name ]== ——  Workspace script run entry

## Describe

`x workspace` provides a project Shell script run entry, command according to the current folder path layer by layer recursion to find files under the `.x-cmd` folder, and use Shell to run scripts.

- **Convenient management**：Provides a unique X entry to help you better manage script files in your project.
- **No pollution external environment**：Scripts run using `x workspace` do not pollute external environment variables.

## Use

### Project directory structure:

- The project root creates an `.x-cmd` folder to store scripts, for example:
```${1}
├─ .x-cmd
│  └── dev
│  └── deploy
│  └── build
│  └── ...
│
└─ src
└─ README.md
```

- Run`x <corresponding script name>`, for example, `x dev` to run the `dev` Shell script file

### Scripting:

- The script file name must be **without file suffix**
- Add the 'xsh' flag at the first line of the script
- Provide the `x wsroot` command to obtain **the root path of the project**

Example：

``` sh
# shellcheck shell=bash #xsh
WS_DIR="$(x wsroot)"
echo "$WS_DIR"
```

