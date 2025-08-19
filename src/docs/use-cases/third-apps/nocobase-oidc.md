# NocoBase
本节将介绍 `EMIS` 与 `NocoBase` 集成步骤详细指南。

## 应用简介
NocoBase 是一个极易扩展的开源无代码开发平台。 不必投入几年时间、数百万资金研发，花几分钟时间部署 NocoBase，马上拥有一个私有、可控、极易扩展的无代码开发平台。
```
说明
NocoBase 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{NocoBase domain}/api/oidc:redirect` 。



## NocoBase 侧配置
1. 用管理员账户登录 NocoBase Web 控制台。

2. 请通过点击插件管理器按钮来下载OIDC插件。该插件的npm包名为 `@nocobase/plugin-oidc`





3. 请根据以下详细步骤，进行OIDC认证服务的配置与激活。



4. 从 EMIS 侧查看相关信息，填写OIDC相关配置。



| 字段 | 说明 |
|:-|:-|
|标题	|自定义名称|
|Issuer	|EMIS应用的发现端点地址|
|Client ID	|OIDC 客户端ID|
|Client secret	|OIDC客户端密钥|
|scope	|用户信息范围 默认为：openid email profile|
|id_token签名算法	|签名算法 默认：RS256|
## 测试验证
### 应用侧发起
1. 在浏览器中，打开NocoBase登录页，单击下方“EMIS”按钮。 

2. 完成账户认证后，将直接跳转到NocoBase主页。 