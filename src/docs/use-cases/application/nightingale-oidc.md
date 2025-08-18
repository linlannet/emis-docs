# 夜莺-Nightingale
本节将介绍 `EMIS` 与 `夜莺-Nightingale` 集成步骤详细指南。

## 应用简介
夜莺监控是一款开源云原生观测分析工具，采用 All-in-One 的设计理念，集数据采集、可视化、监控告警、数据分析于一体，与云原生生态紧密集成，提供开箱即用的企业级监控分析和告警能力。
```
说明
Nightingale 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{Nightingale domain}/callback` 。



## WordPress 侧配置
1. 用管理员账户登录 Nightingale Web 控制台。

2. 请按照以下步骤进行操作：首先，点击左侧的“单点登录”菜单；然后，选择“OIDC”选项以进行相应的设置。



| 字段 | 说明 |
|:-|:-|
|DisplayName	|自定义名称|
|RedirectURL	|Nightingale回调地址|
|SsoAddr	|EMIS应用的Issuer端点地址|
|SsoLogoutAddr	|EMIS应用的登出端点地址|
|ClientId	|OIDC客户端ID|
|ClientSecret	|OIDC客户端密钥|
|Scopes	|用户信息范围|
3. 在完成配置之后，接下来在【Attributes】进行属性映射。


| 字段 | 说明 |
|:-|:-|
|Username	|用户名称|
|Nickname	|用户昵称|
|Phone	|手机号|
|Email	|邮箱|
## 测试验证
### 应用侧发起
1. 在浏览器中，打开Nightingale登录页，单击下方“EMIS”按钮。。

2. 完成账户认证后，将直接跳转到WordPress主页。 