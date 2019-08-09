---
title: "How to read the /etc/passwd file on Linux"
cover: "https://picsum.photos/id/240/2500/1000"
category: "sysadmin"
author: "Endless"
date: "2019-07-17"
tags:
    - sysadmin
    - easy
    - Linux
---

### Lets have at a very important file for any sysadmin of a Linux machine, /etc/passwd

#### Why is this file so important?
``/etc/passwd`` is a file used by the system itself to authenticate users and provide information between Linux processes about the user, and their permissions, home folders and the shell the user uses.

❗️ be very careful editing this file ❗️ We will not be editing this file in this tutorial, however you can do some damage to your system by wrongly editing this file, be careful

so lets take a look at it,
```
cat /etc/passwd

root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
...
* some output ommited *
```

#### Ok, so what do we see here... ?

so we have a line of text, one line of text per row, (each row contains information for one user),

on each line we have words, letters and numbers seperated by a symbol ``:``. Here it is a little clearer,
```
cat /etc/passwd | sed 's/:/    /g' | head

root    x    0    0    root    /root    /bin/bash
bin    x    1    1    bin    /bin    /sbin/nologin
daemon    x    2    2    daemon    /sbin    /sbin/nologin
adm    x    3    4    adm    /var/adm    /sbin/nologin
lp    x    4    7    lp    /var/spool/lpd    /sbin/nologin
sync    x    5    0    sync    /sbin    /bin/sync
shutdown    x    6    0    shutdown    /sbin    /sbin/shutdown
halt    x    7    0    halt    /sbin    /sbin/halt
mail    x    8    12    mail    /var/spool/mail    /sbin/nologin
operator    x    11    0    operator    /root   /sbin/nologin
```
#### Woah woah woah, where is there so many users on my system?
Dont worry 😁 Essentially there are only two users you need to worry about, "you" and "root".
There are many users that your system uses to perform different operations, the seperation of these users allows for some users to have some permissions and not others, for processes to have accesses to certain files and not others etc. Even applications you install may have their own user, and will add them automatically to `/etc/passwd` without you knowing about it.

to see what your username is, use the following command
```
whoami

output for me:  sean-user
```

now that I know my username is ``sean-user`` (yours will be different) you can use the following command to see your user details in ``/etc/passwd``

```
grep sean-user /etc/passwd
```

> 👍 You could also use this command, to achieve the same result from the two steps above, in one command;
>
> ```
grep $(whoami) /etc/passwd
```

#### So what do the columns mean?
Lets take the last line from the output above and break it down, shall we?

```
operator : x : 11 : 0 : operator : /root : /sbin/nologin
```
- The first column ( before the first ``:`` ) ``operator`` is the **Username** of that user.
- The second column ``x`` is quite special, it indicates that your **Password** is encrypted and stored in another file. (As you can see, every row has ``x`` in the 2nd position. It's simply a place-holder for your password. As it would be unsafe to put your password as plain-text in this file, Linux replaces it with `x` and uses another file to read your password, more on that in another tutorial)
- The third column `11` is the **User ID (UID)** The truth is, the system doesn't really care about your real name or username, rather it uses your UID to identify you for any reason. Some things to know about UID's
 - UID 0 (zero) is always reserved for the `root` user
 - UID 1-99 are reserved for other predefined accounts
 - UID 100-999 are reserved for system accounts
 - UID 1000+ are for human users
- The fourth column `0` is the **Group ID (GID)** The primary group ID for this user
- The fifth column `operator` is simply a **human readable string** that explains what this user is for, (for human users it can just be your full name for eg.) but for more complicated application users, it could be a full explanation of what this user is for
- The sixth column `/root`  is the **home directory** of this user  
 - this is used upon login of the users
 - If nothing is provided here, the home directory defaults to `/`
- The seventh column `/sbin/nologin` is the `shell` of the user, more on shells in later tutorials
 - for humans the typical shell would be `/bin/bash`
 - in this example `/sbin/nologin` would mean that nobody is allowed to log-in as `operator` user, the login attempt would be rejected in any case


 Today, we learned how to read the columns of the `/etc/passwd` file

 If Sean Helped You today, feel free to share this post or connect with us soon, available via [gmail](mailto:seanwillhelpyou@gmail.com), [slack](https://app.slack.com/client/TLMMVFQ1X/CLVTNC1MM) or [github](https://github.com/RH-sdavey/sean-will-help-you).
 Thanks for reading!
