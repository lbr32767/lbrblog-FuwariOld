---
title: 邮件服务折腾历程
published: 2026-06-07
description: '邮件服务折腾历程'
image: ''
tags: [postoffice]
category: '部署'
draft: true 
lang: ''
---
几种域名邮箱方案
1. cloudflare邮件路由服务 不买worker计划只能收 不能发
2. 飞书 公共邮箱 可开imap协议 无便捷的调用接口
3. resend.com的邮箱服务 支持imap 便捷调用的接口 但是单账号只能托管单域名 而且有发送限制

最终我选择了cloudflare邮件路由服务收邮件+resend.com的api发邮件服务