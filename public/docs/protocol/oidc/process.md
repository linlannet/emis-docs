# 操作流程
## 创建应用
1. 登录 EMIS 管理控制台。

2. 前往 应用管理-添加应用-标准协议，点击 OIDC 模板。

![OIDC模板](/assets/img/protocol-oidc-template.png "OIDC模板")


3. 确认应用名称，即可完成添加。


4. 添加成功后，点击完善配置，进入应用管理页面完善配置

## 应用配置信息


参数描述：

|参数	|说明|
|:-|:-|
|IDP SSO地址	|应用发起单点登录的地址。|
|OIDC 验签

![OIDC应用配置](/assets/img/protocol-oidc-appconfig.png "OIDC应用配置")

## 协议配置


参数描述：

|参数	|是否必选	|说明|
|:-|:-|:-|
|login 地址	|是	|业务系统中的 OIDC SSO 地址，在单点登录时本系统将向该地址发送 id_token 信息，参数名为 id_token，业务系统通过 id_token 与 Public Key 可获取业务系统中的用户信息，如果在业务系统（SP）发起登录，请求 SP 登录地址时如果携带 redirect_uri 参数，系统会检验合法性，成功后会将浏览器重定向到该地址，并携带 id_token 身份令牌。|
|授权码模式	|是	| 令牌刷新模式 、 隐式模式 、 密码模式|
|redirect url	|否	|业务系统中在 OIDC SSO 成功后重定向的 URL，一般用于跳转到二级菜单等，若设置了该 URL，在 OIDC SSO 时会以参数 redirect_url 优先传递该值，若未设置该值，此时若 SSO 中有请求参数 redirect_url，则会按照请求参数传递该值。此项可选。|
|logout url	|否	|业务系统中在 OIDC SSO 成功登出后的 URL，此项可选。|


![OIDC协议配置](/assets/img/protocol-oidc-protocol.png "OIDC协议配置")


## 访问授权配置信息

![OIDC访问授权选择](/assets/img/protocol-oidc-access.png "OIDC访问授权选择")

