# 专业术语
在科技领域，学习新知识最大的障碍就来自于「术语」，当你试图去了解一个新概念时，大量的术语将会对你的理解造成阻碍。本文将会解释 EMIS 中的常用术语，以期能帮助你尽快熟悉在 EMIS 中涉及到的知识。

## EMIS
Enterprise Multiple Identity System， 用于管理企业内员工账号、权限、身份认证、应用访问，帮助整合部署在本地或云端的内部办公系统、业务系统及三方 SaaS 系统的所有身份，实现一个账号打通所有应用的服务。

## 身份源
EMIS 支持政府、事业单位、企业等组织机构从多种系统导入用户和机构信息，实现将多个系统汇聚为一个完整的用户目录，便于在 EMIS 中统一管理，这些系统就称为身份源。目前 EMIS 支持的身份源有企业微信、钉钉、飞书。

## 身份提供商
EMIS 支持用户使用第三方系统的帐号、密码等进行登录。企业可以根据需要添加并使用认证源，如微信、微博等个人社交认证，钉钉、企业微信等企业社交认证，也可以使用支持CAS、SAML2.0、OAuth2.0、OIDC协议的本地身份认证系统进行认证。

## 单点登录
单点登录 Single Sign-On。指用户仅需一次登录，即可访问全部应用的实现，在历史中根据应用变化，SSO 也有多种实现形态。在 EMIS 的语境中，我们只把基于 SAML、OIDC 等标准协议的身份联邦机制，称为单点登录。

## 单点登出
单点登出（Single Log-Out）是指用户从单点登录系统中登出时，会同时从所有已登录的相关系统或应用中登出。想要完成单点登出的效果，必须有一个唯一身份源，其他业务系统必须配合完成改造和对接，主要是处理来自身份源的登出回调，并将自己的登录态释放。

## 多因素验证（MFA、二次认证）
Multi-Factor Authentication 多因素认证、Two-Factor Authentication 双因素/二次认证，指在登录时需要提供多种身份认证因子，交叉确认访问者身份。由于密码天然的安全弱点，通常用于加强账号+密码登录方式。EMIS 中支持对账密认证开启短信、邮件或动态令牌（OTP）二次认证。

## 应用
应用是指在 EMIS 上进行统一管理和授权的第三方系统。包含标准协议及定制协议。

## 应用账户
Application User，指在单点登录时，已登录 EMIS 账户在目标应用中所扮演的身份。举例：smallbun（EMIS 账户）在“运营平台”应用中是 admin（应用账户）。EMIS 支持多种应用账户与 EMIS 账户的关联方式。在同一个应用中，当同时可扮演多个身份时，用户需要选择一个身份进行访问。

## OTP
One Time Password 动态口令，一次有效的验证码机制。最常用的 OTP 为 TOTP（Time-based One-Time Password），通常 30s 一变，服务端和客户端（APP）需提前对齐种子、提前校对时间。在同一时间窗口内，客户端（APP）计算的动态口令（OTP）应与服务端一致，从而通过认证。

## IDP
Identity Provider，身份提供方。源自于 SAML 协议中定义，IdP 为进行用户认证、鉴权，并返回 SAML Response 结果信息给 SP 的身份提供方，后通用化指统一身份管理平台。在当前场景中，EMIS 即是 IdP。

## SP
Service Provider，服务提供方，即应用。源自于 SAML 协议中定义，SP 为接收 IdP 返回结果的解析方，后通用化指接入 IdP 的应用。

## AD
微软 Active Directory，微软用于企业办公场景中，对组织、账户、权限进行管理的组件，可单独部署。由于其极广的适用性，很多现代应用也支持 AD 作为其账号体系。由于 AD 普遍存在的体验和兼容性问题，通常企业会寻找其他身份方案，比如 EMIS。

## LDAP
Lightweight Directory Access Protocol，轻量级目录访问协议，最常用于和 AD、OpenLDAP 企业目录进行交互，但同样采用与 Apache Directory 等其他系统。

## OpenLDAP
广泛使用的，开源的基于 LDAP 协议的开源身份目录。

## SCIM
System for Cross-domain Identity Management，跨域身份管理系统，专用于不同系统之间账户、组织同步的国际通用规范，国内外有大量应用支持接收 SCIM 协议同步请求，以实现不同系统身份的互用性 Interoperability。

## SAML
Security Assertion Markup Language 安全断言标记语言，基于 XML，全球使用广泛的单点登录协议，相较 OIDC 而言较为复杂。EMIS 支持 SAML 2.0。

## OIDC
OpenID Connect。OIDC 协议于 2014 年发布，结合了 OpenID 认证协议和 OAuth 2.0 授权协议的优势，是全球通用的现代身份联邦协议，用于实现 SSO、鉴权、委托认证等场景。

## OAuth 2.0
授权协议，虽不是为了 SSO 设计，但也经常用于实现 SSO。由于 OIDC 协议基于 OAuth 2.0 协议实现，两者很多支持的模式是互通的。

## JWT
Json Web Token（RFC7519） 狭义上是一种基于 JSON 的信息传输格式。由于传输的内容支持签名和加密，JWT 又经常代表一种简化的、部分基于 OIDC 隐式流的单点登录实现方式。

## CAS
Central Authentication Service。全球通用的单点登录协议，支持 B/S 网页应用。

## access_token
access_token 是授权令牌，用于调用 IdP 提供的接口。

## id_token
id_token 是身份令牌，可通过解析 id_token 内容，获取当前已登录账户信息。

## refresh_token
refresh_token 是刷新令牌，在 access_token 令牌过期后，可以使用 refresh_token 获取新令牌。

