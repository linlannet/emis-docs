# 如何配置 nginx 反向代理
```
# 定义后端服务器池，用于负载均衡
upstream backend_servers {
    server 10.255.53.33:1898;  # 第一个服务实例
    server 10.255.53.34:1898;  # 第二个服务实例
    server 10.255.53.35:1898;  # 第三个服务实例
}

server {
    # 监听IPv4和IPv6的1898端口（根据需求进行更改）
    listen       1898;
    listen       [::]:1898;

    # 使用下划线(_)作为默认服务器名称，表示匹配任何主机名（根据需求进行更改）
    server_name  _;

    location / {
        # 将客户端的真实IP地址传递给后端服务器
        proxy_set_header X-Real-IP $remote_addr;

        # 添加或更新X-Forwarded-For头信息，包含客户端和其他代理服务器的IP地址
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # 设置X-Forwarded-Proto头信息，指示原始请求使用的协议（HTTP/HTTPS）
        proxy_set_header X-Forwarded-Proto $scheme;

        # 将客户端的请求端口传递给后端服务器
        proxy_set_header X-Forwarded-Port $server_port;

        # 设置Host头部为当前请求的主机名加上端口号
        proxy_set_header Host $host:$server_port;

        # 将请求转发给定义的后端服务器池（backend_servers），进行负载均衡
        proxy_pass http://backend_servers/;
    }
}
```