# MeterSphere
本节将介绍 `EMIS` 与 `MeterSphere` 集成步骤详细指南。

## 应用简介
MeterSphere 是开源持续测试平台，遵循 GPL v3 开源许可协议，涵盖测试管理、接口测试、UI 测试和性能测试等功能，全面兼容 JMeter、Selenium 等主流开源标准，有效助力开发和测试团队充分利用云弹性进行高度可扩展的自动化测试，加速高质量的软件交付。
```
说明
MeterSphere 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{MeterSphere domain}/sso/callback/oidc/emis` 。



## MeterSphere 侧配置
1. 用管理员账户登录 MeterSphere Web 控制台。

2. 请根据以下详细步骤，进行OIDC认证服务的配置与激活。



3. 从 EMIS 侧查看相关信息，填写OIDC相关配置。



| 字段 | 说明 |
|:-|:-|
|授权端地址	|EMIS应用的授权端点地址|
|Token 端地址	|EMIS应用的token端点地址|
|用户信息端地址	|EMIS应用的用户信息端点地址|
|回调地址	|回调地址格式为：`https://[MeterSphere domain]/sso/callback/oidc/emis`|
|客户端 ID	|OIDC 客户端ID|
|客户端密钥	|OIDC客户端密钥|
## 测试验证
### 应用侧发起
1. MeterSphere，单击下方“OIDC”按钮。 

2. 完成账户认证后，将直接跳转到MeterSphere主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到MeterSphere首页。 