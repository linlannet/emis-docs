# Portainer
本节将介绍 `EMIS` 与 `Portainer` 集成步骤详细指南。

## 应用简介
Portainer 是一个开源的容器管理平台，旨在简化 Docker 和 Kubernetes 的管理与操作。它提供了一个直观的图形用户界面（GUI），使得开发者和运维人员能够轻松地管理容器、服务、应用程序和集群。无论你是使用 Docker 还是 Kubernetes，Portainer 都能够提供一个统一的管理界面，减少了命令行操作的复杂性，提升了使用效率。
```
说明
Portainer 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{Portainer domain}`。



2. 在高级配置中，用户信息范围勾选 `email`、`phone`、`profile`。



## Portainer 侧配置
1. 用管理员账户登录 Portainer Web 控制台。

2. 进入Authentication settings 界面后，选择Oauth选项。



3. 选择Custom选项进行自定义提供商，并填写Oauth配置信息。



## 测试验证
### 应用侧发起
1. 在浏览器中，打开Portainer登录页，单击上方“Login with OAuth”按钮进行EMIS系统登录。 

2. 完成账户认证后，将直接跳转到Portainer主页。 