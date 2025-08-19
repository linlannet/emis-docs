# 操作流程
## 创建应用
1. 登录 EMIS 管理控制台。
2. 前往 应用管理-添加应用，点击 表单代填 模板。
![表单代填模板](/assets/img/protocol-form-template.png "表单代填模板")


3. 确认应用名称，即可完成添加。
![市场监管表单代填](/assets/img/protocol-form-add-shichang.png "市场监管表单代填")


4. 添加成功后，点击完善配置，进入应用管理页面登录访问-单点登录完善配置
![市场监管表单代填完善配置](/assets/img/protocol-form-add-over.png "市场监管表单代填完善配置")



## 应用配置信息


参数描述：

|参数	|说明|
|:-|:-|
|IDP SSO地址	|应用发起单点登录的地址。|

![FORM应用配置](/assets/img/protocol-form-appconfig.png "FORM应用配置")

## 协议配置


参数描述：

|参数	|是否必选	|说明|
|:-|:-|:-|
|登录提交 URL	|是	|登录表单提交完整 URL，以 http:// 或 https:// 开头，如：https://oa.xxxx.com/login|
|登录名属性名称	|是	|表单中用户名标签的 name 属性|
|登录密码属性名称	|是	|表单中密码框标签的 name 属性|
|登录密码加密算法	|否	|登录密码加密算法，目前支持 AES 和 BASE64|
|登录密码加密密钥	|否	|登录密码加密密钥，当选择 AES 加密算法时显示|
|用户名加密算法	|否	|用户名加密算法，目前支持 AES 和 BASE64|
|用户名加密密钥	|否	|用户名加密密钥，当选择 AES 加密算法时显示|
|登录提交方式	|是	|表单登录提交方式|
|授权范围	|是	|规范应用的可使用人群范围 ，全员访问： 在 EMIS 中的所有账户，均可访问该应用，无需额外授权。 手动授权： 需要在应用的 【访问授权】 标签中，手动分配可访问应用的组织和账户。|
|登录其他字段	|否	|登录表单中的其他字段或属性|

![FORM协议配置](/assets/img/protocol-form-protocol.png "FORM协议配置")

## 账户配置信息

![FORM应用账户](/assets/img/protocol-form-account.png "FORM应用账户")

## 访问授权信息

![FORM访问授权](/assets/img/protocol-form-access.png "FORM访问授权")

