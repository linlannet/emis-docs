const data = [
  {
    label: "What's new",
    url: '/docs/README.md',
  },
  {
    label: "文档使用指南",
    url: '/docs/allguide.md',
  },
  {
    label: '系统全景图',
    url: '/docs/overview-platform.md',
    children: [
      {
        label: '专业术语',
        url: '/docs/overview/term.md'
      },
      {
        label: '系统简介',
        url: '/docs/overview/introduction.md'
      },
      {
        label: '系统架构',
        url: '/docs/overview/architecture.md'
      },
      {
        label: '安全特性',
        url: '/docs/overview/security.md'
      },
      {
        label: '信创支持',
        url: '/docs/overview/innovation.md'
      },
      {
        label: '系统荣誉',
        url: '/docs/overview/honors.md'
      }
    ],
  },
  {
    label: '产品简介',
    url: '/docs/guide/README.md',
    children: [
      {
        label: '管理控制台',
        children: [{
          label: '登录',
          url: '/docs/guide/console/login.md'
        }, {
          label: '总览',
          url: '/docs/guide/console/workspace.md'
        }, {
          label: '账户管理',
          url: '/docs/guide/console/account',
          children: [{
            label: '组织及用户',
            url: '/docs/guide/console/account/user.md'
          }, {
            label: '用户组管理',
            url: '/docs/guide/console/account/user-group.md'
          }, {
            label: '身份源管理',
            url: '/docs/guide/console/account/identity-source.md'
          }]
        }, {
          label: '认证管理',
          url: '/docs/guide/console/authentication',
          children: [{
            label: '身份提供商',
            url: '/docs/guide/console/authentication/identity-provider.md'
          }]
        }, {
          label: '应用管理',
          url: '/docs/guide/console/application',
          children: [{
            label: '创建应用',
            url: '/docs/guide/console/application/create-app.md'
          }, {
            label: '应用列表',
            url: '/docs/guide/console/application/app-list.md'
          }, {
            label: '应用分组',
            url: '/docs/guide/console/application/app-group.md'
          }]
        }, {
          label: '行为审计',
          url: '/docs/guide/console/audit',
          children: [{
            label: '控制台管理员行为',
            url: '/docs/guide/console/audit/audit.md'
          }, {
            label: '门户用户行为',
            url: '/docs/guide/console/audit/audit.md'
          }]
        }, {
          label: '安全设置',
          url: '/docs/guide/console/security',
          children: [{
            label: '通用安全',
            url: '/docs/guide/console/security/general-security.md'
          }, {
            label: '密码策略',
            url: '/docs/guide/console/security/password-policy.md'
          }]
        }, {
          label: '系统设置',
          url: '/docs/guide/console/setting',
          children: [{
            label: '消息设置',
            url: '/docs/guide/console/setting/message.md'
          }, {
            label: 'IP地理库',
            url: '/docs/guide/console/setting/geo-ip.md'
          }, {
            label: '存储配置',
            url: '/docs/guide/console/setting/storage.md'
          }]
        }, {
          label: '系统监控',
          url: '/docs/guide/console/monitor',
          children: [{
            label: '会话管理',
            url: '/docs/guide/console/monitor/session.md'
          }, {
            label: '缓存管理',
            url: '/docs/guide/console/monitor/redis.md'
          }]
        }]
      },
      {
        label: '门户工作台',
        url: '/docs/guide/portal',
        children: [{
          label: '登录',
          url: '/docs/guide/portal/login.md'
        }, {
          label: '忘记密码',
          url: '/docs/guide/portal/forgot-password.md'
        }, {
          label: '工作台',
          url: '/docs/guide/portal/workspace.md'
        }, {
          label: '我的应用',
          url: '/docs/guide/portal/applications.md'
        }, {
          label: '我的账户',
          url: '/docs/guide/portal/account.md'
        }, {
          label: '操作日志',
          url: '/docs/guide/portal/audit.md'
        }, {
          label: '会话管理',
          url: '/docs/guide/portal/session.md'
        }]
      }
    ]
  },
  {
    label: '协议支持',
    url: '/docs/protocol/README.md',
    children: [{
      label: 'jwt协议',
      url: '/docs/protocol/jwt',
      children: [{
        label: '协议概述',
        url: '/docs/protocol/jwt/overview.md'
      }, {
        label: '实用原理',
        url: '/docs/protocol/jwt/implement-principle.md'
      }, {
        label: '操作流程',
        url: '/docs/protocol/jwt/process.md'
      }, {
        label: '常见问题',
        url: '/docs/protocol/jwt/faq.md'
      }]
    }, {
      label: 'oidc协议',
      url: '/docs/protocol/oidc/',
      children: [{
        label: '协议概述',
        url: '/docs/protocol/oidc/overview.md'
      }, {
        label: '实用原理',
        url: '/docs/protocol/oidc/implement-principle.md'
      }, {
        label: '操作流程',
        url: '/docs/protocol/oidc/process.md'
      }, {
        label: '常见问题',
        url: '/docs/protocol/oidc/faq.md'
      }]
    }, {
      label: 'form表单代填',
      url: '/docs/protocol/form/',
      children: [{
        label: '协议概述',
        url: '/docs/protocol/form/overview.md'
      }, {
        label: '操作流程',
        url: '/docs/protocol/form/process.md'
      }, {
        label: '常见问题',
        url: '/docs/protocol/form/faq.md'
      }]
    }, {
      label: 'CAS协议',
      url: '/docs/protocol/cas/',
      children: [{
        label: '常见问题',
        url: '/docs/protocol/cas/faq.md'
      }]
    }, {
      label: 'SAML2协议',
      url: '/docs/protocol/saml2/',
      children: [{
        label: '常见问题',
        url: '/docs/protocol/saml2/faq.md'
      }]
    }]},
    {
      label: '认证身份',
      url: '/docs/authentication/README.md'
    },
    {
      label: '用户案例',
      url: '/docs/use-cases/README.md'
    }
]
export  { data }