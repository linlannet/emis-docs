# Bytebase
本节将介绍 `EMIS` 与 `Bytebase` 集成步骤详细指南。

## 应用简介
Bytebase 是一个开源的数据库 DevOps 工具，旨在帮助团队简化数据库管理、自动化数据库部署和版本控制。它特别适用于数据库开发、变更管理和团队协作，支持多种数据库类型（如 MySQL、PostgreSQL、MariaDB、SQL Server 等）。
```
说明
Bytebase 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{Bytebase domain}/oidc/callback`。



## Bytebase 侧配置
1. 用管理员账户登录 Bytebase Web 控制台。

2. 请根据以下详细步骤，进行OIDC认证服务的配置与激活。



3. 从 EMIS 侧查看相关信息，填写OIDC相关配置。



| 字段 | 说明 |
|:-|:-|
|名称	|自定义名称|
|Issuer	|EMIS应用的issuer端点地址|
|Client ID	|OIDC 客户端ID|
|Client secret	|OIDC客户端密钥|
## 测试验证
### 应用侧发起
1. Bytebase，单击下方“OIDC”按钮。 

2. 完成账户认证后，将直接跳转到Bytebase主页。 