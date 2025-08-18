# 存储配置
管理员对系统文件存储服务商进行配置。存储服务商目前支持阿里云，腾讯云，七牛云，MinIo，S3

![存储供应商](/src/assets/img/c-1.8-setting-storage.png "存储供应商")

## 阿里云


|参数	|说明|
|:-|:-|
|绑定域名	|外部访问域名(CDN 域名)|
|AccessKeyId	|阿里云账号 AccessKey Id|
|AccessKeySecret	|阿里云账号 AccessKey Secret|
|Endpoint	|填写 Bucket 所在地域对应的 Endpoint。以华东 1（杭州）为例，Endpoint 填写为<https://oss-cn-hangzhou.aliyuncs.com> <br> 关于获取 Endpoint 的更多信息，请参见访问域名和数据中心|
|Bucket	|填写 Bucket 名称，例如 examplebucket。|
#### 说明

阿里云账号 AccessKey 拥有所有 API 的访问权限，风险很高。强烈建议您创建并使用 RAM 用户进行 API 访问或日常运维，请登录 RAM 控制台创建 RAM 用户。

![阿里云存储设置](/src/assets/img/c-1.8-setting-storage-config.png "阿里云存储设置")

## 腾讯云

|参数	|说明|
|:-|:-|
|绑定域名	|外部访问域名(CDN 域名)|
|APPId	|开发者访问 COS 服务时拥有的用户维度唯一资源标识，用以标识资源，可在 API 密钥管理 页面获取|
|SecretId	|开发者拥有的项目身份识别 ID，用于身份认证，可在 API 密钥管理 页面获取|
|SecretKey	|开发者拥有的项目身份密钥，可在 API 密钥管理 页面获取|
|Region	|地域信息，枚举值可参见 可用地域 文档，例如：ap-beijing、ap-hongkong、eu-frankfurt 等|
|Bucket	|存储桶，COS 中用于存储数据的容器。有关存储桶的进一步说明，请参见 存储桶概述 文档|
## 七牛云

|参数	|说明|
|:-|:-|
|绑定域名	|外部访问域名(CDN 域名)|
|AccessKey	|七牛云账号 AccessKey Id 查看 AccessKey 和 Secret Key|
|SecretKey	|七牛云账号 AccessKey Secret|
|Bucket	|填写 Bucket 名称，例如 examplebucket。|
## Minio

|参数	|说明|
|:-|:-|
|绑定域名	|外部访问域名(CDN 域名)|
|AccessKey	|Access key 就像用户 ID，可以唯一标识你的账户。|
|SecretKey	|Secret key 是你账户的密码。|
|Endpoint	|对象存储服务的 URL|
|Bucket	|填写 Bucket 名称，例如 examplebucket。|
## S3

|参数	|说明|
|:-|:-|
|S3域名	|访问S3域名|
|外链域名	|S3的外链域名。|
|AccessKeyId	|S3账号 AccessKey Id 。|
|SecretAccessKey	|S3账号 AccessKey Secret。|
|Bucket	|填写 Bucket 名称，例如 examplebucket。|
|Region	|填写 Region 名称。|