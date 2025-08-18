# WordPress
本节将介绍 `EMIS` 与 `WordPress` 集成步骤详细指南。

应用简介
WordPress是一种开源内容管理系统(CMS)，主要用于创建和管理网站和博客。‌它最初于2003年发布，经过多年的发展，已经成为一个功能强大的网站建设平台，支持从简单的博客到复杂的电子商务网站和企业网站等各种类型的网站。
```
说明
WordPress 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
```
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
1. 配置登录 Redirect URI，格式为：`https://{WordPress domain}` 。



## WordPress 侧配置
1. 用管理员账户登录 WordPress Web 控制台。

2. 点击左侧插件菜单，安装“OAuth Single Sign On” 插件。



3. 请选择通用的OpenID Connect（OIDC）选项。



4. 请按照以下步骤开始进行 OIDC 配置：点击 "Configure OAuth"，然后选择 "Add New Application"。




| 字段 | 说明 |
|:-|:-|
|Display name	|自定义名称|
|Callback URL	|WordPress部署地址|
|Client ID	|OIDC客户端ID|
|Client Secret	|OIDC客户端密钥|
|Scopes	|用户信息范围，必须包含openid|
|Authorization Endpoint	|EMIS应用的认证端点地址|
|Token Endpoint	|EMIS应用的Token端点地址|
5. 在完成配置之后，接下来的步骤是点击“Attribute Mapping”以进行属性映射。





## 测试验证
### 应用侧发起
1. 在浏览器中，打开WordPress登录页，单击下方“Login with EMIS”按钮。 

2. 完成账户认证后，将直接跳转到WordPress主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到WordPress首页。 