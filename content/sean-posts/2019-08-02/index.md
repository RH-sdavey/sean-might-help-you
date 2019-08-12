---
title: "How to restart Linux NTPD service"
cover: "https://picsum.photos/id/357/2500/1000"
date: "2019-08-02"
author: "Endless"
category: "sysadmin"
tags:
    - Ntpd
    - Ntp
    - Services
    - Linux
    - Easy
---


### After changes to the NTP configuration file (usually ntp.conf) the NTP service needs to be restarted. Lets find out how to do that
The exact command depends on your Linux distribution.


### The NTP service on your machine could be any one of the following:

- ntpd ( you probably need this one on most Linux distro's )
- xntpd
- openntpd

#### Debian or Ubuntu based systems (older versions)

```
 sudo service ntp restart
```

#### Debian 9.x+ or Ubuntu 16.04+ LTS based systems
```
sudo systemctl restart ntp
```

#### Red Hat or Fedora or CentOs (older versions)
```
sudo service ntpd restart
```

#### Red Hat or Fedora or CentOs (7.x+)
```
sudo systemctl restart ntpd
```

### Check the status of NTP service restart

Depending on if you used ``ntp`` or ``ntpd`` in the commands above, you can use the following command to check the status of the NTP service restart
```
sudo systemctl status ntp
```
or
```
sudo systemctl status ntpd
```

Today,we learned how to restart the ntp service on Linux based Distro's

If Sean Helped You today, feel free to share this post or connect with us soon, available via [gmail](mailto:seanwillhelpyou@gmail.com), [slack](https://app.slack.com/client/TLMMVFQ1X/CLVTNC1MM) or [github](https://github.com/RH-sdavey/sean-will-help-you).
Thanks for reading!
