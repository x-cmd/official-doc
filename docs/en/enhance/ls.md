---
title: x ls
description: x-cmd 增强 ls 命令 | 文件列表展示命令
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x ls

<Terminal :termIndex="0"/>

## Summary
==x ls [[ OPTION ]...](#command-options) [ Folder ]...==  ——  Enhance the list of output files

> Using x-cmd static compilation module, [exa](https://github.com/ogham/exa) is distributed and hosted to achieve rapid installation and use in different environments.

<br>

::: tip Tip
`x ll` command is equivalent to `x ls -l` output long list command
:::

## Describe

`x ls` is a modern replacement for the old file list command line program that came with Unix and Linux operating systems, giving it more features and better defaults. It uses color to distinguish between file types and metadata. It understands symbolic links, extended properties, and Git. It is small, fast, has only one binary file, and is more powerful and user-friendly than the traditional `ls` command `x ls`.

- **Color**: Different types of files and data will be colored differently, and user and group columns will be highlighted for the current user.
- **Information**: Displays the extended properties of the file, as well as standard file system information, such as permissions, size, and the date and time the file was created and updated.
- **Tree view**: The standard Tree tool is built in.
- **Git support**: View the staged and unstaged status of each file, right in the standard view. Also applies to the tree view to get a high-level overview of the repository.
## Command options

> `x ls` command options are almost but not exactly the same as `ls`

-1 , --oneline
:   Each row displays one entry

-G , --grid
: Display entries as grids (default)

-l , --long
: Display extension details and properties

-R , --recurse
:  Recurse to the directory

-T , --tree
: ==Recursively into a directory as a tree==

-x , --across
: Sort the grid, not down

-F , --classify
: Displays type indicators by filename

--icons
: Display icons

--no-icons
: Do not display icons (always overwrite -- icons)

### Filtering options

-a , --all
: ==Shows hidden and dot-prefixed files==

-d , --list-dirs
: Lists directories like normal files

-L , --level=(depth)
: Limit the recursion depth

-r , --reverse
: Reverse sort order

-s , --sort=(field)
: Which field to sort by

--group-directories-first
: List directories before other files

-D , --only-dirs
: List only directories

--git-ignore
: Ignore the file mentioned in .gitignore

-I , --ignore-glob=(globs)
: Global mode for files to ignore (pipe separation)

### Long view options

-b , --binary
: Lists file sizes with binary prefixes

-B , --bytes
: Lists file sizes in bytes without any prefix

-g , --group
: Lists the groups for each file

-h , --header
: Add a header row for each column

-H , --links
: Lists the number of hard links per file

-i , --inode
: Lists the inode number of each file

-m , --modified
: Use the modified timestamp field

-S , --blocks
: Lists the number of file system blocks for each file

-t , --time=(field)
: Which timestamp field to use

-u , --accessed
: Use the timestamp field of the access

-U , --created
: Use the created timestamp field

-@ , --extended
: Lists the extended attributes and sizes for each file

--changed
: Use the changed timestamp field

--git
: Lists the Git status of each file, if tracked or ignored

--time-style
: How do I format the timestamp

--no-permissions
: Forbidden permission field

--octal-permissions
: List permissions for each file in octal format

--no-filesize
: Cancel the file size field

--no-user
: Disable user field

--no-time
: Suppression time field


> Check out more [exa document to consult](https://github.com/ogham/exa)