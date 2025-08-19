# JumpServer
本节将介绍 `EMIS` 与 `JumpServer` 集成步骤详细指南。

## 应用简介
JumpServer 是广受欢迎的开源堡垒机，是符合 4A 规范的专业运维安全审计系统。JumpServer 帮助企业以更安全的方式管控和登录所有类型的资产，实现事前授权、事中监察、事后审计，满足等保合规要求。
```
说明
JumpServer 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{JumpServer domain}/core/auth/openid/callback/` 。



### JumpServer 侧配置
1. 用管理员账户登录 JumpServer Web 控制台。

2. 请根据以下详细步骤，进行OIDC认证服务的配置与激活。





3. 根据以下字段配置JumpServer OIDC。

| 字段 | 说明 |
|:-|:-|
|JumpServer 地址	|地址格式为：http://[JumpServer domain]/auth|
|客户端 ID	|OIDC 客户端ID|
|客户端密钥	|OIDC客户端密钥|
|端点地址	|EMIS应用的端点前缀|
|授权端点地址	|EMIS应用的授权端点地址|
|Token 端点地址	|EMIS应用的token端点地址|
|Jwks 端点地址	|EMIS应用的Jwks端点地址|
|用户信息端点地址	|EMIS应用的用户信息端点地址|
|注销会话端点地址	|EMIS应用的注销端点地址|
|连接范围	|用户信息范围|
|映射属性	|对应EMIS系统返回的claims|
## 测试验证
### 应用侧发起
1. JumpServer，单击下方“OpenID”按钮。 

2. 完成账户认证后，将直接跳转到JumpServer主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到JumpServer首页。 