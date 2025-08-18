# QQ认证
EMIS 支持政府、事业单位、企业等组织机构以多种认证源渠道登录至 EMIS 平台，本节将介绍如何在 EMIS 平台中配置 QQ 扫码认证

![QQ社交认证源](/src/assets/img/authentication-social-list.png "QQ社交认证源")

## 在 QQ 互联平台上创建应用
在 QQ 互联平台上创建应用，并通过配置 OneAccess 的授权信息，可以建立 QQ 对 EMIS 的信任。

1. 登录QQ 互联平台。
2. 在 QQ 互联平台，创建网站应用，待审核通过后，获取 AppID 和 AppKey。具体可参考 QQ 互联平台的帮助文档。


## 添加 QQ 认证源


| 参数 | 说明 |
|:-|:-|
|认证提供商	|身份验证提供商信息|
|认证源名称	|管理员可以自定义认证源名称|
|AppId	|登录 QQ 开发申请获取的 AppId|
|AppSecret	|登录 QQ 开发申请获取的 AppSecret|
|是否显示	|是否在 EMIS 多身份集成管理系统登录页显示认证源|
|备注	|认证源备注信息|


![QQ社交认证源配置](/src/assets/img/authentication-social-qq.png "QQ社交认证源配置")

