# 实现原理
EMIS 提供了基于 OIDC 协议实现SSO应用模板。 OIDC 应用支持IDP发起和SP发起两种单点登录场景：

1. IDP发起：即从 EMIS 平台直接发起单点登录请求，传递 ID Token至业务系统， 继而在业务系统进行验证，完成登录。

2. SP发起：即从SP(业务系统)发起单点登录请求，跳转到 EMIS 平台，进行登录，再跳转回业务系统完成 ID Token认证从而实现业务系统的登录。

## 登录流程
### IDP 发起登录流程

#### 步骤描述

1. 用户访问客户端应用
2. 客户端重定向用户到OP的授权端点
3. 用户认证并授权
4. OP返回授权码给客户端
5. 客户端用授权码换取ID Token和Access Token
6. 客户端可验证ID Token并获取用户信息
## SP 发起登录流程
    
### IDP/SP发起登录区别
- 相同点：都需要业务系统开发 ID Token验证和解析的接口，并根据解析出来的用户子账户信息，判断用户是否为该业务系统用户。

- 不同点：两者发起入口不同，从 EMIS 平台发起单点登录，用户直接通过点击 EMIS 平台首页的 OIDC 应用（即业务系统），就能完成 ID Token认证和业务系统的登录；而从SP（业务系统）发起单点登录，此时业务系统不一定已经完成了 EMIS 平台的登录，或者登录信息过期失效，这时候业务系统会跳转到 EMIS 登录页面，在用户进行登录后，由 EMIS 携带 ID Token跳转到业务系统完成 ID Token认证和业务系统的登录。

## 元数据结构
```
Issuer
    https://linlan.net/emis/portal/api/V1/authorize/fattwe9x4kppcepmivb6xnvz8is3sg5v/oidc
    用于标识 token 发放来源的字段。同时是下述接口的 baseUrl。
发现端点
    https://linlan.net/emis/portal/api/V1/authorize/fattwe9x4kppcepmivb6xnvz8is3sg5v/oidc/.well-known/openid-configuration
    用于获取当前 EMIS 支持的各端点信息和支持的模式、参数信息，可公开访问。
授权端点
    https://linlan.net/emis/portal/api/V1/authorize/fattwe9x4kppcepmivb6xnvz8is3sg5v/oauth2/auth
    应用发起单点登录的地址。
令牌端点
    https://linlan.net/emis/portal/api/V1/authorize/fattwe9x4kppcepmivb6xnvz8is3sg5v/oauth2/token
    应用在单点登录过程中，拿到 code 后，从后端发起换取 token 的接口地址。
令牌吊销端点
    https://linlan.net/emis/portal/api/V1/authorize/fattwe9x4kppcepmivb6xnvz8is3sg5v/oauth2/revoke
验签公钥端点
    https://linlan.net/emis/portal/api/V1/authorize/fattwe9x4kppcepmivb6xnvz8is3sg5v/oidc/jwks
    用于验证 id_token、完成 SSO 流程的公钥端点。公钥可能会轮转。
用户信息端点
    https://linlan.net/emis/portal/api/V1/authorize/fattwe9x4kppcepmivb6xnvz8is3sg5v/oauth2/userinfo
    在账户登录后，使用 access_token 调用用户信息端点，获取账户基本信息。
结束会话端点
    https://linlan.net/emis/portal/api/V1/authorize/fattwe9x4kppcepmivb6xnvz8is3sg5v/oidc/connect/logout
```

## 客户端元数据：
```
json
{
"client_id": "s6BhdRkqt3",
"client_secret": "some_secret",
"redirect_uris": ["https://client.example.org/callback"],
"response_types": ["code"],
"grant_types": ["authorization_code", "refresh_token"],
"token_endpoint_auth_method": "client_secret_basic",
"scope": "openid profile email"
}
```
