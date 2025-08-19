# Paperless-ngx
本节将介绍 `EMIS` 与 `Paperless-ngx` 集成步骤详细指南。

# 应用简介
Paperless-ngx 是一个将纸质文档数字化、可搜索化的开源文档管理系统。它的核心功能是利用 OCR（光学字符识别）和机器学习技术，对扫描或拍摄的纸质文件进行文字识别和自动分类。用户可以通过标签、类型和主题等方式对文档进行组织和检索，并以 PDF/A 格式长期保存。提供全文搜索和可视化的 Web 界面，大大提升文件的查找效率与管理便利性。
```
说明
Paperless-ngx 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：

`https://{Paperless-ngx domain}/accounts/oidc/{provider_id}/login/callback。`



## Paperless-ngx 侧配置
1. 找到安装目录下的 docker-compose.env 文件。

2. 将以下配置配置到 docker-compose.env 文件中。
```
PAPERLESS_APPS="allauth.socialaccount.providers.openid_connect"
PAPERLESS_SOCIALACCOUNT_PROVIDERS='{
    "openid_connect": {
        "APPS": [
            {
                "provider_id": "linlan_emis",
                "name": "EMIS",
                "client_id": "OIDC客户端ID",
                "secret": "OIDC客户端密钥",
                "settings": {
                    "server_url": "EMIS应用的发现端点地址"
                }
            }
        ]
    }
}'
```
3. 执行命令重启服务。
```
docker-compose build
docker-compose up -d
```
## 测试验证
### 应用侧发起
1. 在浏览器中，打开Paperless-ngx登录页，单击下方图标进行EMIS系统登录。 

2. 在验证了用户名和电子邮箱的准确性之后，请点击“注册”按钮以完成注册流程。 