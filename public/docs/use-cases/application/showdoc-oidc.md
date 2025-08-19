# ShowDoc
本节将介绍 `EMIS` 与 `ShowDoc` 集成步骤详细指南。

## 应用简介
ShowDoc 是一款开源的在线文档工具，专为团队协作设计，适用于 API 文档、技术文档、产品手册、项目说明等的编写与共享。它在简化文档的创建与管理，并通过简单直观的操作界面，方便团队成员进行文档的编写与查阅。

## EMIS 侧配置
### 新建OIDC协议应用


### 配置应用基础信息
1. 完善应用基本信息，如应用图标、应用分组等

2. 授权范围：改为全员可访问，手动授权请参考应用授权进行配置。


```
信息
默认情况下，授权范围设定为“手动授权”，这需要前往“访问授权”进行具体的权限分配；如果选择“全员可访问”，那么便无需再进行访问授权的分配。
```
### 协议配置
1. 配置登录 Redirect URI，格式为：`https://{ShowDoc domain}/server?/api/extLogin/oauth2` 。



## ShowDoc 侧配置
1. 用管理员账户登录 ShowDoc Web 控制台。

2. 点击右上角的设置按钮，进入ShowDoc管理页面。



3. 进入管理页面后点击集成登录后，选择OAuth2填写相关配置。



| 字段 | 说明 |
|:-|:-|
|callback url	|回调url，格式为：https://[ShowDoc domain]/server?/api/extLogin/oauth2|
|入口文字提示	|自定义名称|
|Client id	|OIDC 客户端ID|
|Client secret	|OIDC 客户端密钥|
|Oauth host	|EMIS地址|
|Authorize path	|EMIS应用的授权端点地址|
|AccessToken path	|EMIS应用的Token端点地址|
|User info path	|EMIS应用的用户信息端点地址|
|Logout_redirect_url	|EMIS应用的结束会话端点地址|
## 测试验证
### 应用侧发起
1. 在浏览器中，打开ShowDoc登录页，单击下方“EMIS”按钮。



2. 完成账户认证后，将直接跳转到Wiki主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到ShowDoc首页。 