# 操作流程
## 创建应用
1. 登录 EMIS 管理控制台。

2. 前往 应用管理-添加应用-标准协议，点击 JWT 模板。

![JWT模板](/assets/img/protocol-jwt-template.png "JWT模板")


3. 确认应用名称，即可完成添加。

![静安人才JWT](/assets/img/protocol-jwt-add.png "静安人才JWT")


4. 添加成功后，点击完善配置，进入应用管理页面完善配置

## 应用配置信息


参数描述：

|参数	|说明|
|:-|:-|
|IDP SSO地址	|应用发起单点登录的地址。|
|JWT 验签

![JWT应用配置](/assets/img/protocol-jwt-appconfig.png "JWT应用配置")

## 协议配置


参数描述：

|参数	|是否必选	|说明|
|:-|:-|:-|
|SSO 地址	|是	|业务系统中的 JWT SSO 地址，在单点登录时本系统将向该地址发送 id_token 信息，参数名为 id_token，业务系统通过 id_token 与 Public Key 可获取业务系统中的用户信息，如果在业务系统（SP）发起登录，请求 SP 登录地址时如果携带 redirect_uri 参数，系统会检验合法性，成功后会将浏览器重定向到该地址，并携带 id_token 身份令牌。|
|target link url	|否	|业务系统中在 JWT SSO 成功后重定向的 URL，一般用于跳转到二级菜单等，若设置了该 URL，在 JWT SSO 时会以参数 target_link_url 优先传递该值，若未设置该值，此时若 SSO 中有请求参数 target_link_url，则会按照请求参数传递该值。此项可选。|
|SSO 绑定类型	|是	|指定向 JWT 应用发送 id_token 的请求方式。
|id_token 主体类型	|是	|当应用设置 id_token 主体类型为用户 ID 时，subject 取值为登录用户 ID（userId）。<br>当应用设置 id_token 主体类型为应用账户时，subject 取值为应用帐号名（accountName）。|
|id_token 过期时间	|是	|id_token 的有效期，单位为：秒。可设置范围为 1-84600。|
|授权范围	|是	|规范应用的可使用人群范围 ，全员访问： 在 EMIS 中的所有账户，均可访问该应用，无需额外授权。 手动授权： 需要在应用的 【访问授权】 标签中，手动分配可访问应用的组织和账户。|


![JWT协议配置](/assets/img/protocol-jwt-protocol.png "JWT协议配置")

## 账户配置信息

![JWT应用账户选择](/assets/img/protocol-jwt-account-add.png "JWT应用账户选择")

![JWT应用账户](/assets/img/protocol-jwt-account-finish.png "JWT应用账户")

## 访问授权信息

![JWT访问授权选择](/assets/img/protocol-jwt-access-select.png "JWT访问授权选择")

![JWT访问授权](/assets/img/protocol-jwt-access-finish.png "JWT访问授权")
