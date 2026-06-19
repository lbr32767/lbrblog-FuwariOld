---
title: 主题二次修改部署说明
published: 2026-05-23
description: 主题二次修改部署说明
image: ""
tags:
  - blog
category: 部署
draft: false
lang: ""
---
# 部署过程概略
1. 在github上克隆本仓库到自己名下.
2. 修改src\config.ts文件，配置自己的网站信息.
3. 部署网站.

## 克隆仓库
1. 打开仓库页面.
::github{repo="lbr32767/lbrblog"}
:::tip
点击卡片打开仓库页面.
:::
2. 打开fork界面.
点击fork按钮，将仓库复制到自己的github账号下.
![fork第二步](./Img/BlogDeploy/ForkSecondStep.png)
2. 修改信息fork仓库.
修改仓库名称(1)和描述(2).并点击创建(3).
![fork第三步](./Img/BlogDeploy/ForkThirdStep.png)

## 修改配置文件
1. 打开fork仓库.
:::tip
如果在fork后没有跳转到fork仓库，需要手动打开fork的仓库页面.
[打开自己的仓库页面](https://github.com/repos?q=owner%3A%40me)
找到刚才fork的仓库(自己的github账号+'/'+刚才fork的仓库名称)，点击进入仓库页面.
:::
2. 打开src\config.ts文件.
打开文件夹
![打开文件夹](./Img/BlogDeploy/OpenFileSrc/Config-tsFirst.png)
打开文件
![打开文件](./Img/BlogDeploy/OpenFileSrc/Config-tsSecond.png)
3. 点击ai界面
![点击ai界面](./Img/BlogDeploy/OpenAiUi.png)
4. 发送以下提示词
``` md
请根据此文件(src\config.ts)内容,帮助我修改配置文件此配置文件,缺少信息请询问我.
```
## 部署网站
### cloudflare
1. 打开cloudflare控制台. (没有账号就注册一个)
[打开cloudflare](https://dash.cloudflare.com/)
2. 点击计算
![点击计算](./Img/BlogDeploy/CloudFlare/cfFirst.png)
3. 点开workers和pages
![点击workers和pages](./Img/BlogDeploy/CloudFlare/cfSecond.png)
4. 点击创建应用程序
![点击创建应用程序](./Img/BlogDeploy/CloudFlare/cfThird.png)
5. 点击进pages
![点击进pages](./Img/BlogDeploy/CloudFlare/cfFourth.png)
6. 点选择git
![点击选择git](./Img/BlogDeploy/CloudFlare/cfFifth.png)
7. 关联github账号选择仓库
8. 选择框架部署
选择Astro
![选择Astro](./Img/BlogDeploy/CloudFlare/cfSixth.png)
点击下面的保存并部署按钮.
9. 绑定域名或使用默认域名