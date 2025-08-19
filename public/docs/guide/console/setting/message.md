# 消息设置
消息服务设置包括邮件服务配置和短信服务配置。邮件服务配置是指将消息发送到指定的电子邮件地址，需要配置SMTP服务器地址、端口号、用户名、密码等信息。短信服务配置是指将消息以短信的形式发送到指定的手机号码，需要配置短信服务提供商的API接口地址、账号、密码等信息。

# 邮件模版

邮件模板为系统固定类型，且都有默认模板内容，如需自定配置邮件内容则配置对应模板的相应内容
![消息设置邮件模板](/assets/img/c-1.8-setting-mail-template.png "消息设置邮件模板")



可以使用模版内置参数个性化配置发送主题与发送内容，支持 html
![邮件模板设置](/assets/img/c-1.8-setting-mail-template-config.png "邮件模板设置")

## 邮件服务
管理员对邮件提供商和邮件模板进行配置，用来发送系统消息。目前支持阿里云，腾讯云，网易企业邮

![邮件服务商](/assets/img/c-1.8-setting-mail-provider.png "邮件服务商")


## 邮件提供商配置
|参数	|说明|
|:-|:-|
|SMTP	|邮件服务 SMTP 地址|
|端口号	|邮件服务端口号|
|安全验证	|是否使用 SSL，None 为不使用|
|用户名	|邮件发送者用户名|
|密码	|邮件发送者密码|

![邮件服务商设置](/assets/img/c-1.8-setting-mail-provider-config.png "邮件服务商设置")


## 短信服务
管理员对短信提供商和模板进行配置，并设置模板对应 ID 或 CODE，短信服务目前支持阿里云，七牛云，腾讯云

![短信服务商](/assets/img/c-1.8-setting-sms-provider.png "短信服务商")

### 阿里云


|参数	|说明|
|:-|:-|
|AccessKey ID	|您的 AccessKey ID|
|AccessKey Secret	|您的 AccessKey Secret|
|短信签名	|设置的短信签名 添加签名|

![短信服务商设置](/assets/img/c-1.8-setting-sms-config.png "短信服务商设置")

### 腾讯云

|参数	|说明|
|:-|:-|
|地域	|地域信息，默认为广州|
|SecretId	|用于标识 API 调用者的身份 查询|
|SecretKey	|用于加密签名字符串和服务器端验证签名字符串的密钥，SecretKey 需妥善保管，避免泄露。|
|短信应用 ID	|短信 SdkAppId 在 短信控制台 添加应用后生成的实际 SdkAppId <br> 应用 ID 可前往 短信控制台 查看|
|短信签名	|短信签名内容，必须填写已审核通过的签名 <br>签名信息可前往 国内短信 或 国际/港澳台短信 的签名管理查看|
### 七牛云


|参数	|说明|
|:-|:-|
|AccessKey	|七牛云账号 AccessKey Id 查看 AccessKey 和 Secret Key|
|SecretKey	|七牛云账号 AccessKey Secret|
## 测试短信发送
点击对应模版的测试按钮，输入接收测试短信手机号码，点击确定发送测试短信 