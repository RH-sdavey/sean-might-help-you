---
title: "Lets create a script to get all user information, together"
cover: "https://picsum.photos/id/41/2500/1000"
category: "sysadmin"
author: "Endless"
date: "2019-08-03"
tags:
    - Sysadmin
    - Medium
    - Linux
    - Scripting
---


### In this tutorial I'd like to try something a little different, lets write a script together

> 👍 Normally I would never advocate copying and pasting anything directly from a website to your computer, but if you wish to copy and paste the lines from here, then it's your choice. I haven't hidden any nasty code anywhere, and I will explain every line of the script as we go along, so you know that nothing freaky will happen when you run my/our/your code on your system.

So lets get to it,

This will be a Linux bash script, so you can write this script in any linux based text editor you like, I will be using one called Vim but gedit will be fine

So first we need a file, lets create a file called "get_user_info.sh" in your home directory

```
 cd ~ ; touch get_user_info.sh
```

- `cd ~` takes you to your home directory
- `touch` is a command used to create files, in this case, get_user_info.sh

ok, so now we have our file, just one more step and we can start editing it. We need to make the script 'executable', that is to say that we can 'execute/run' our script, to do that, do the following

```
chmod u+x ./get_user_info.sh
```

This will "change the mode" of our script to `+x` be e**x**ecutable.

to check we have the desired results, try this command,

```
ls -l ./get_user_info.sh

output:
-rwxr--r-- 1 sean 1049089 0 Aug  3 22:53 get_user_info.sh
```

The whole output is unimportant for this tutorial all that matters is that you have a little 'x' here:  -rw**x**r--r--

if yes, then lets get scripting!

### Lets do it!
Ok so, our script will collect as much information about the current user (you) as possible, and output it to the screen... in a neat and tidy way, sounds like a good first project.

lets open up the file, and as with all bash scripts the first line should look exactly like this,

```
#!/bin/bash
```
Lets not get into why just now, but just know, if youre creating a bash script, this should always be your first line! nothing more nothing less..
just remember ... "hash-bang/bin/bash"

TODO finish this tutorial
