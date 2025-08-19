# 创建应用
本页面包含了所有已支持的可添加应用列表，管理员可以选择需要使用的应用进行初始化配置，并开始后续使用。应用分为两种：一种是支持标准的 OIDC、SAML、JWT、CAS等模板的应用，在这里可以通过添加对应的标准应用模板来实现单点登录功能；另一种是定制应用，本类应用已经提供了对接其单点登录或用户同步的接口，由 EMIS 为其提供定制化模板进行对接。

## 标准协议
企业身份管理体系有国际通用的、普遍使用的身份管理协议。成熟的企业软件，往往参照国际通用标准协议，便于其客户与自己的IdP进行集成。

在左侧导航栏，单击应用管理 > 创建应用，搜索您希望接入的单点登录协议。

![创建应用](/src/assets/img/c-1.5-appstore-create-list.png "创建应用")


## 添加应用
1. 选择应用所支持的协议或应用模板。
![创建应用](/src/assets/img/c-1.5-appstore-create-add.png "创建应用")


2. 完善应用信息，点击确认完成添加。以CAS协议的应用为例。
![应用配置](/src/assets/img/c-1.5-appstore-list-manage-base.png "应用配置")
![协议配置](/src/assets/img/c-1.5-appstore-list-manage-protocol.png "协议配置")
![访问授权](/src/assets/img/c-1.5-appstore-list-manage-access.png  "访问授权")
