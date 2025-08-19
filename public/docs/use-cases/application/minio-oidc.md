# MinIO
本节将介绍 `EMIS` 与 `MinIO` 集成步骤详细指南。

## 应用简介
MinIO 是一种高性能、S3 兼容的对象存储。它专为大规模 AI/ML、数据湖和数据库工作负载而构建，并且它是由软件定义的存储。不需要购买任何专有硬件，就可以在云上和普通硬件上拥有分布式对象存储。

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
1. 配置登录 Redirect URI，格式为：`https://{MinIO domain}/oauth_callback` 。



## MinIO 侧配置
1. 设置系统环境变量。
```
export MINIO_IDENTITY_OPENID_CONFIG_URL="{MinIO domain}/api/v1/authorize/zknqx2ygnilujustk5g2retdm0nltd8b/oidc/.well-known/openid-configuration"
export MINIO_IDENTITY_OPENID_CLIENT_ID="OIDC 客户端 ID"
export MINIO_IDENTITY_OPENID_CLIENT_SECRET="OIDC 客户端密钥"
export MINIO_IDENTITY_OPENID_CLAIM_NAME="policy"
export MINIO_IDENTITY_OPENID_SCOPES="openid,email"
export MINIO_IDENTITY_OPENID_COMMENT="EMIS"
```

| 字段 | 说明 |
|:-|:-|
|MINIO_IDENTITY_OPENID_CONFIG_URL	|OIDC发现端点|
|MINIO_IDENTITY_OPENID_CLIENT_ID	|OIDC 客户端 ID|
|MINIO_IDENTITY_OPENID_CLIENT_SECRET	|OIDC 客户端密钥|
|MINIO_IDENTITY_OPENID_ROLE_POLICY	|创建的policy名称|
|MINIO_IDENTITY_OPENID_SCOPES	|需要访问资源范围|
|MINIO_IDENTITY_OPENID_COMMENT	|备注|
|MINIO_BROWSER_REDIRECT_URL	|重定向URL|
2. 进入 MinIO Web 控制台，随后在左侧导航栏中选择“Policies”选项以创建新的策略，并设置环境变量MINIO_IDENTITY_OPENID_ROLE_POLICY。



```export MINIO_IDENTITY_OPENID_ROLE_POLICY="创建的policy名称"```

3. 重启 MinIO 服务
```sudo systemctl restart minio.service```

## 测试验证
### 应用侧发起
1. 浏览器中，打开MinIO登录页，单击下方“Login with SSO (EMIS)”按钮。



2. 完成账户认证后，将直接跳转到MinIO主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到MinIO主页。 