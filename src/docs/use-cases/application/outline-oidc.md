# Outline
本节将介绍 `EMIS` 与 `Outline` 集成步骤详细指南。

## 应用简介
Outline是一个现代化的知识管理和团队协作工具，旨在帮助团队组织、创建和分享文档。它提供了一个集中的平台，使团队成员能够高效地编写、编辑和管理文档，并通过易于使用的界面进行合作。Outline 的主要目标是简化知识的整理和分享过程，提高团队协作的效率。
```
说明
Outline 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{Outline domain}/auth/oidc.callback`。



2..在高级配置中，用户信息范围勾选 `email`、`profile`。



## Outline 侧配置
1. 找到安装目录下的 docker.env 文件。

2. 将以下配置配置到 docker.env 文件中。
```
OIDC_NAME=<登录页面显示名称>
OIDC_CLIENT_ID=<OIDC客户端ID>
OIDC_CLIENT_SECRET=<OIDC客户端密钥>
OIDC_AUTH_URI=<EMIS应用的授权端点地址>
OIDC_TOKEN_URI=<EMIS应用的token端点地址>
OIDC_USERINFO_URI=<EMIS应用的用户信息端点地址>
OIDC_LOGOUT_URI=<EMIS应用的登出端点地址>

OIDC_USERNAME_CLAIM=preferred_username

OIDC_DISPLAY_NAME=EMIS

OIDC_SCOPES=openid profile email
```
3. 执行命令重启服务。
```bin/up ```

## 测试验证
### 应用侧发起
1. 在浏览器中，打开Outline登录页，单击下方“使用EMIS继续”按钮进行EMIS系统登录。 

2. 完成账户认证后，将直接跳转到Outline主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到Outline首页。 