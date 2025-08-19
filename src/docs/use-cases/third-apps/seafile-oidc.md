# Seafile
本节将介绍 EMIS 与 Seafile 集成步骤详细指南。

## 应用简介
Seafile 是一款开源的企业级文件同步和共享平台，主要用于文件管理、同步、备份和协作。它可以通过客户端和浏览器访问，支持跨平台（Windows、Linux、macOS、Android、iOS）。
```
说明
Seafile 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{Seafile domain}/oauth/callback`。



2. 在高级配置中，用户信息范围勾选 `email`、`profile`。



## Seafile 侧配置
1. 找到 `/opt/seafile-data/seafile/conf` 路径下的 seahub_settings.py 文件。

2. 将以下配置配置到 seahub_settings.py 文件中。
```
ENABLE_OAUTH = True
OAUTH_CREATE_UNKNOWN_USER = True
OAUTH_ACTIVATE_USER_AFTER_CREATION = True
OAUTH_ENABLE_INSECURE_TRANSPORT = True
OAUTH_CLIENT_ID = <OIDC客户端ID>
OAUTH_CLIENT_SECRET = <OIDC客户端密钥>
OAUTH_PROVIDER_DOMAIN = <EMIS域名>
OAUTH_PROVIDER = <EMIS域名>
OAUTH_REDIRECT_URL = "https://{Seafile domain}/oauth/callback/"
OAUTH_AUTHORIZATION_URL = <EMIS应用的授权端点地址>
OAUTH_TOKEN_URL = <EMIS应用的token端点地址>
OAUTH_USER_INFO_URL = <EMIS应用的用户信息端点地址>
OAUTH_SCOPE = ["openid","email","profile"]
OAUTH_ATTRIBUTE_MAP = {
    "email": (True, "email"),
    "preferred_username": (False, "name"),
}
```
3. 执行命令重启服务。
```
docker-compose build
docker-compose up -d
```
## 测试验证
### 应用侧发起
1. 在浏览器中，打开Seafile登录页，单击下方“单点登录”按钮进行EMIS系统登录。 

2. 完成账户认证后，将直接跳转到Seafile主页。 