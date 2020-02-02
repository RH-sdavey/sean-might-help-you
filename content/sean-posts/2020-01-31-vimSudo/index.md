---
title: "How to use the vim sudo trick"
cover: "https://i.picsum.photos/id/304/2500/1000.jpg"
category: "Sysadmin"
author: "Endless"
date: "2020-01-31"
tags:
    - Easy
    - Linux
    - Vim
---

# Ever edited a file in Vim that needed sudo, but you forgot to use sudo...

## So you have to exit vim, repoen the file and do your edits again?

__Well no more!__  With this simple Vim trick you can just go ahead and save that file and have more time for a coffee... Lets get to it.

![noidea](https://content.spiceworksstatic.com/service.community/p/post_images/0000260963/597622c4/attached_image/f92d4b22e5cc707446004930603cdb4d--white-belt-black-belt.jpg)

So youve finished editing your document, some super important system config file, and you go to save your document in vim, _oh no!_ this file needs sudo/root priviliges to edit! , but you dont want to leave vim, and the reopen the file again with ```sudo !!``` and do your edits again, well dont 

```:w !sudo tee %```

This command will ask you for confirmation that you really want to save this file, all thats required is to type "O" for "Ok" and press "Enter". You will be then taken back to the edited and saved file, and you can exit as usual. No extra save required. Easy!

## Whats happening here?

Lets break it down.

- :w    = write the file
- !sudo  = but before we do, execute (!)the sudo command
- tee  = and tee ( man tee for explanation ) the file contents line by line
- % =  into the current file (%)

so, take the contents of the file, run them through ```sudo tee``` back into the same file and then save them. Nice simple one-liner to help with a very common problem for sysadmins and vim users around the world.

> 👍 TIP: You can add this to your .vimrc to make this trick easy-to-use:
>```
>cmap w!! w !sudo tee > /dev/null %
>```
> now you can just type ```:w!!``` to do the trick in an _even_ shorter time. FTW!

Thats all for today. Peace!

![bye](https://img.buzzfeed.com/buzzfeed-static/static/2017-11/22/9/enhanced/buzzfeed-prod-web-06/anigif_enhanced-26695-1511361022-1_preview.gif)

If Sean Helped You today, feel free to share this post or connect with us soon, available via [gmail](mailto:seanwillhelpyou@gmail.com), [slack](https://app.slack.com/client/TLMMVFQ1X/CLVTNC1MM) or [github](https://github.com/RH-sdavey/sean-will-help-you).
Thanks for reading!
