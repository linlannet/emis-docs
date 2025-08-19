# 微信认证
EMIS 支持政府、事业单位、企业等组织机构以多种认证源渠道登录至 EMIS 平台，本节将介绍如何在 EMIS 平台中配置微信开放平台扫码认证

![wechat社交认证源](/src/assets/img/authentication-social-list.png "wechat社交认证源")

## 在微信开放平台上创建应用
在微信开放平台上创建应用，并通过配置 EMIS 的授权信息，可以建立微信对 EMIS 的信任。

1. 登录微信开放平台。
2. 在微信开放平台，选择“管理中心 > 网站应用 > 创建网站应用”，待审核通过后，获取 AppID 和 AppSecret。具体可参考微信开放平台的帮助文档。
```
信息
说明： 创建应用时，授权回调域填写管理门户域名
```
## 添加微信认证源


| 参数 | 说明 |
|:-|:-|
|认证提供商	|身份验证提供商信息|
|认证源名称	|管理员可以自定义认证源名称|
|AppId	|微信扫码登录开发申请获取的 AppId|
|AppSecret	|微信扫码登录开发申请获取的 AppSecret|
|是否显示	|是否在 EMIS 多身份集成管理系统登录页显示认证源|
|备注	|认证源备注信息|

![wechat社交认证源配置](/src/assets/img/authentication-social-wechat.png "wechat社交认证源配置")
