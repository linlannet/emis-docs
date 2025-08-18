# KubeSphere
本节将介绍 `EMIS` 与 `KubeSphere` 集成步骤详细指南。

## 应用简介
KubeSphere 是在 Kubernetes 之上构建的以应用为中心的多租户容器平台，提供全栈的 IT 自动化运维的能力，简化企业的 DevOps 工作流。KubeSphere 提供了运维友好的向导式操作界面，帮助企业快速构建一个强大和功能丰富的容器云平台。
```
说明
KubeSphere 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，默认为：`https://{KubeSphere domain}/oauth/redirect/{提供商名称}` 。



2. 配置用户信息范围，勾选 `email`、`phone`、`profile`



## KubeSphere 侧配置
1. 以具有 platform-admin 角色的用户登录 KubeSphere Web 控制台。

2. 点击“企业空间管理”，选择“kubesphere-system”项目。



3. 在进入项目后，请依次选择“保密字典”菜单项，随后点击“创建”按钮以新建字典。



4. 请单击弹窗右上角的“编辑YAML”按钮以进入Kubernetes脚本配置界面，并将以下示例粘贴至相应位置。



| 字段 | 说明 |
|:-|:-|
|name	|自定义提供商名称|
|type	|固定值：OIDCIdentityProvider|
|mappingMethod	|固定值：auto|
|provider:clientID	|OIDC 客户端ID|
|provider:clientSecret	|OIDC客户端密钥|
|provider:issuer	|EMIS应用的issuer地址|
|provider:redirectURL	|重定向URL。格式为：https://[KubeSphere domain]/oauth/redirect/[configuration.yaml的name字段]|
|provider:scopes	|需要访问资源范围|
## 测试验证
### 应用侧发起
1. 打开KubeSphere登录页，单击上方“通过 EMIS 登录”按钮。 

2. 完成账户认证后，将直接跳转到KubeSphere主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到KubeSphere首页。 