# Grafana
本节将介绍 `EMIS` 与 `Grafana` 集成步骤详细指南。

## 应用简介
Grafana 是一个开源的监控与数据可视化平台，广泛用于实时数据分析。它支持从多种数据源（如 Prometheus、InfluxDB、Elasticsearch 等）获取数据，并通过自定义图表和仪表盘进行展示。Grafana 提供多种图表类型，并支持告警系统，当数据超过阈值时自动通知用户。它还支持插件扩展和多种身份验证方式（如 OAuth 和 SSO），方便与其他系统集成，适用于各类企业和团队的监控需求。
```
说明
Grafana 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{grafana domain}/login/generic_oauth` 。



## Grafana 侧配置
1. 找到[auth.generic_oauth]部分并修改配置。

    默认情况下，Grafana配置文件位于的工作目录中的conf/defaults.ini。
```
[auth.generic_oauth]
enabled = true 
name = EMIS
allow_sign_up = true
client_id = <授权服务器客户端id>
client_secret = <授权服务器密钥>
scopes = <授权范围>
auth_url = <授权服务器认证端点>
token_url = <授权服务器令牌端点>
api_url = <授权服务器用户信息端点>
login_attribute_path = preferred_username
name_attribute_path = preferred_username
```

| 字段 | 说明 |
|:-|:-|
|enabled	|是否启用通用OIDC|
|name	|自定义名称|
|allow_sign_up	|是否允许用户注册|
|client_id	OIDC |客户端ID|
|client_secret	|OIDC客户端密钥|
|scopes	|授权范围|
|auth_url	|授权服务器认证端点|
|token_url	|授权服务器令牌端点|
|api_url	|授权服务器用户信息端点|
|login_attribute_path	|映射登录字段|
|name_attribute_path	|映射显示名称字段|
2. 保存配置文件并重新启动 Grafana。
## 测试验证
### 应用侧发起
1. 在浏览器中，打开Grafana登录页，单击下方“Sign in with EMIS”按钮。



2. 完成账户认证后，将直接跳转到Grafana主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到Grafana首页。 