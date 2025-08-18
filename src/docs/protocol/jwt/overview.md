# 协议概述
## 什么是 JSON Web Token？
JSON Web Token（JWT）是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准。该 token 被设计为紧凑且安全的，适用于分布式站点的单点登录（SSO）场景。

JWT 的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该 token 也可直接被用于认证，也可被加密。

## JSON Web Token 结构是什么？
JWT 是由三段信息构成的，将这三段信息文本用.链接一起就构成了 JWT 字符串

这三部分分别是：

- Header
- Payload
- Signature
输出是三个由.分隔的 Base64-URL 字符串编码值，如下：



### Header
由 token 的类型（“JWT”）和算法名（例如 HMAC、SHA256 等）两部分组成 JSON 字符串（如下），并对该 JSON 字符传进行 Base64 编码，最终到 Header 信息。
```
{
  "typ": "JWT",
  "alg": "RS256"
}
```

### Payload
即存放有效信息的地方，由多个声明字段组成的 JSON 字符串（如下），并对该 JSON 字符传进行 Base64 编码，最终到 Payload 信息。 这些有效信息包括：标准中注册的声明、自定义声明。其中，自定义声明，不应包括个人身份等敏感信息。标准中注册的声明为建议使用，但不强制使用，包括：

- iss：JWT 签发者
- sub：JWT 所面向的用户
- aud：接收 JWT 的一方
- exp：JWT 的过期时间，这个过期时间必须要大于签发时间
- nbf：定义在什么时间之前，该 JWT 都是不可用的
- iat：JWT 的签发时间
- jti：JWT 的唯一身份标识，主要用来作为一次性 token，从而回避重放攻击
```
{
  "sub": "12345678",
  "name": "Allen",
  "admin": true
}
```
### Signature
即签名信息，采用 Header 中指定的签名算法（alg），对（Base64 编码的 Header + "." + Base64 编码的 payload）计算签名信息（如下）。签名过程如需使用密钥，应提前生成指定算法的密钥，并存储于认证服务器。
```
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
var signature = HMACSHA256(encodedString, 'secret');
```
可以使用调试器 [jwt.io](https://www.jwt.io/) 来进行解码、验证和生成 JWT。



## JSON Web Token 应用场景?
- 授权：这是使用 JWT 最常见的场景。用户登录后，每个后续请求都将包含 JWT，从而允许用户访问该令牌允许的路由、服务和资源。单点登录是当今广泛使用 JWT 的一项功能，因为它的开销很小并且能够轻松地跨不同域使用。

- 信息交换：JSON Web 令牌是在各方之间安全传输信息的好方法。因为 JWT 可以进行签名（例如，使用公钥/私钥对），所以您可以确定发送者就是他们所说的人。此外，由于签名是使用标头和有效负载计算的，因此您还可以验证内容是否未被篡改。