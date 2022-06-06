---
title: x ls
description: x-cmd enhanced ls command | File list display command
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
    exclude: false
---

# x ls

<Terminal :termIndex="0"/>

## Synopsis
==x ls [[ OPTION ]...](#options) [ Folder ]...==  ——  Enhance the list of output files

> Using x-cmd static compilation module, [exa](https://github.com/ogham/exa) is distributed and hosted to achieve rapid installation and use in different environments.

<br>

::: tip Tip
`x ll` command is equivalent to `x ls -l` output long list command
:::

## Description

`x ls` is a modern replacement for the old file list command line program that came with Unix and Linux operating systems, giving it more features and better defaults. It uses color to distinguish between file types and metadata. It understands symbolic links, extended properties, and Git. It is small, fast, has only one binary file, and is more powerful and user-friendly than the traditional `ls` command `x ls`.

- **Color**: Different types of files and data will be colored differently, and user and group columns will be highlighted for the current user.
- **Information**: Displays the extended properties of the file, as well as standard file system information, such as permissions, size, and the date and time the file was created and updated.
- **Tree view**: The standard Tree tool is built in.
- **Git support**: View the staged and unstaged status of each file, right in the standard view. Also applies to the tree view to get a high-level overview of the repository.
## Options

> `x ls` command options are almost but not exactly the same as `ls`

-1 , --oneline
:   Display one entry per line

-G , --grid
: Display entries as a grid (default)

-l , --long
: Display extended file metadata as a table

-R , --recurse
:  Recurse into directories

-T , --tree
: ==Recurse into directories as a tree==

-x , --across
: Sort the grid, not down

-F , --classify
: Display type indicator by file names

--icons
: Display icons

--no-icons
: Don't display icons (always overwrite -- icons)

### Filtering and sorting options

-a , --all
: ==Show hidden and 'dot' files==

-d , --list-dirs
: List directories as files; don't list their contents

-L , --level=(depth)
: Limit the depth of recursion

-r , --reverse
: Reverse the sort order

-s , --sort=(field)
: Which field to sort by

--group-directories-first
: List directories before other files

-D , --only-dirs
: List only directories

--git-ignore
: Ignore the file mentioned in .gitignore

-I , --ignore-glob=(globs)
: Glob patterns (pipe-separated) of files to ignore

### Long view options

-b , --binary
: Lists file sizes with binary prefixes

-B , --bytes
: Lists file sizes in bytes, without any prefixes

-g , --group
: List each file's group

-h , --header
: Add a header row to each column

-H , --links
: List each file's number of hard links

-i , --inode
: List each file's inode number

-m , --modified
: Use the modified timestamp field

-S , --blocks
: Show number of file system blocks

-t , --time=(field)
: Which timestamp field to list (modified, accessed, created)

-u , --accessed
: Use the accessed timestamp field

-U , --created
: Use the created timestamp field

-@ , --extended
: List each file's extended attributes and sizes

--changed
: Use the changed timestamp field

--git
: List each file's Git status, if tracked or ignored

--time-style
: How to format timestamps (default, iso, long-iso, full-iso)

--no-permissions
: Suppress the permissions field

--octal-permissions
: List each file's permission in octal format

--no-filesize
: Suppress the filesize field

--no-user
: Suppress the user field

--no-time
: Suppress the time field


> Check out more [exa document to consult](https://github.com/ogham/exa)