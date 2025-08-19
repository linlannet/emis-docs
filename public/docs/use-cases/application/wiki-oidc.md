# Wiki
本节将介绍 `EMIS` 与 `Wiki` 集成步骤详细指南。

应用简介
Wiki.js 是一款高度可定制且现代化的开源 Wiki 系统，专为团队知识管理和文档协作设计，具有强大的扩展性和跨平台支持能力。基于 Node.js 构建，Wiki.js 提供了简洁高效的用户界面和全面的管理功能，能够满足多种场景下的知识库需求。
```
说明
Wiki 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{Wiki domain}/login/{随机生成字符}/callback` 。



## Wiki 侧配置
1. 用管理员账户登录 Wiki Web 控制台。

2. 请根据以下详细步骤，进行OIDC认证服务的配置与激活。





3. 从 EMIS 侧查看相关信息，填写OIDC相关配置。



| 字段 | 说明 |
|:-|:-|
|Display Name	|自定义名称|
|Client ID	|OIDC 客户端ID|
|Client Secret	|OIDC客户端密钥|
|Authorization Endpoint URL	|EMIS应用的授权端点地址|
|Token Endpoint URL	|EMIS应用的令牌端点地址|
|User Info Endpoint URL	|EMIS应用的用户端点地址|
|Issuer	|EMIS应用的发现端点地址|
|Email Claim	|设置电子邮件地址的字段|
|Display Name Claim	|设置用户显示名的字段|
|Logout URL	|EMIS应用的结束会话端点地址|
|Allow self-registration	|允许任何成功获得登录方式授权的用户访问 wiki|
|Assign to group	|将认证成功的用户分配给指定的组|
## 测试验证
### 应用侧发起
1. 在浏览器中，打开Wiki登录页，单击下方“EMIS”按钮。



2. 完成账户认证后，将直接跳转到Wiki主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到Wiki首页。 