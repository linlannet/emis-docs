# GitLab
本节将介绍 `EMIS` 与 `GitLab` 集成步骤详细指南。

## 应用简介
GitLab是一个功能全面的DevOps平台，它集成了Git仓库管理、持续集成与持续部署（CI/CD）、项目管理、代码审查、包管理以及发布等一系列功能。该平台为软件开发团队提供了一套从项目规划直至交付和监控的完整生命周期管理工具，极大地促进了开发流程的顺畅与高效。
```
说明
GitLab 支持多种协议，EMIS 都可以很好的与其进行集成，本篇文章 EMIS 使用OIDC协议与其对接。
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
1. 配置登录 Redirect URI，格式为：`https://{GitLab domain}/users/auth/openid_connect/callback` 。



## GitLab 侧配置
1. 修改GitLab配置文件并保存。

    GitLab配置文件位于的工作目录中的etc/gitlab/gitlab.rb。

    ```
    ## 是否启用OmniAuth
    gitlab_rails['omniauth_enabled'] = true

    ## 如果与用户的电子邮件地址匹配，您可以自动将其与现有的 GitLab 用户关联。
    gitlab_rails['omniauth_auto_link_user'] = [ "openid_connect"]


    ## 允许 GitLab 使用 OpenID Connect (OIDC) 作为单点登录（SSO）认证方式
    gitlab_rails['omniauth_allow_single_sign_on'] = ['openid_connect']

    ##允许认证成功后在GitLab创建账户
    gitlab_rails['omniauth_block_auto_created_users'] = false

    gitlab_rails['omniauth_providers'] = [
        { 'name' => 'openid_connect',
            'label' => 'EMIS',
            'args' => {
            'name' => 'openid_connect',
            'scope' => ['openid','profile','email','phone'],
            'response_type' => 'code',
            'issuer': '<EMIS应用的 Issuer 端点地址>',
            'discovery' => true,
            'client_auth_method' => 'basic',
            'uid_field' => 'sub',
            'client_options' => {
                'identifier' => '<OIDC客户端ID>',
                'secret' => '<OIDC客户端密钥>',
                'redirect_uri' => '<您的GitLab地址>/users/auth/openid_connect/callback'
            }
            }
        }
    ]
    ```

2. 运行以下命令应用配置
```sudo gitlab-ctl reconfigure```

## 测试验证
### 应用侧发起
1. 在浏览器中，打开GitLab登录页，单击下方“EMIS系统登录”按钮。



2. 完成账户认证后，将直接跳转到GitLab主页。 

### 门户侧发起
1. 进入门户中心之后，请在我的应用中点击您已创建的应用。 

2. 点击应用后，跳转到GitLab首页。 