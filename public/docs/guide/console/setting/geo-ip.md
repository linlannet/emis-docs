# IP地理库
管理员对地理位置获取服务商进行配置。地理位置服务商目前仅支持 MaxMind

配置IP地理库根据访问者的IP地址迅速识别出其所在的地理位置。通过识别用户IP地址的地理位置，可以根据地理位置信息制定相应的访问策略，从而提高系统的安全性。例如，您可以设置地区限制，阻止来自特定国家或地区的潜在恶意访问。

## 系统默认
EMIS系统默认使用内置ip2region数据库识别用户IP地址的地理位置。

![IP地理库系统默认](/assets/img/c-1.8-setting-ip-default.png "IP地理库系统默认")

## MaxMind

![IP地理库Maxmind](/assets/img/c-1.8-setting-ip-maxmind.png "IP地理库Maxmind")

1. 注册 MaxMind 官网账号 https://www.maxmind.com

2. 生成 MaxMind 许可证密钥 地址：https://www.maxmind.com/en/accounts/642890/license-key

3. 按照图中选择提交生成许可证

4. 复制生成的 License Key，保存到 EMIS 注册码字段

