---
title: workspace
description: x-cmd workspace 工作区脚本, 脚本管理项目，轻松搞定代码项目管理
sidebarDepth: 1
lastUpdated: true
---

# x workspace

<Terminal :termIndex="7"/>

## 概要

==x [ 脚本文件名 ]== ——  工作区脚本运行入口

## 描述

`x workspace` 提供项目Shell脚本运行入口，命令根据当前文件夹路径层层递归寻找 `.x-cmd` 文件夹下的文件，并使用Shell运行脚本。

- **方便管理**：提供唯一 x 入口帮助你更好管理项目中的脚本文件。
- **无污染外部环境**：使用 `x workspace` 所运行的脚本文件，不会污染到外部的环境变量。

## 使用

### 项目目录结构：

- 项目根目录创建 `.x-cmd` 文件夹用于存放脚本，例如：
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

- 运行`x <对应脚本文件名>`, 例如 `x dev`即可运行 `dev` Shell脚本文件

### 脚本编写：

- 脚本文件名需 **无文件后缀**
- 脚本第一行需添加 `xsh` 标识
- 提供 `x wsroot` 命令获取 **项目的根路径**

例子：

``` sh
# shellcheck shell=bash #xsh
WS_DIR="$(x wsroot)"
echo "$WS_DIR"
```

