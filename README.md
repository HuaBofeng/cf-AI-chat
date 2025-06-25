# Cloudflare AI Web - Cloudflare Workers 适配部署说明

本项目已适配 Cloudflare Workers 环境。以下为新手友好的本地开发与线上部署流程。

---

## 1. 准备工作

- 注册并登录 [Cloudflare](https://dash.cloudflare.com/)
- 安装 [Node.js](https://nodejs.org/) (建议 LTS 版本)
- 全局安装 wrangler（Cloudflare 官方部署工具）：

```bash
npm install -g wrangler
```

---

## 2. 配置环境变量

**安全说明：请只在本地 .env 文件和 Cloudflare 后台存储密钥，不要把密钥提交到 Git 仓库！**

1. 按照 `.env.example` 填写 `.env` 文件，或直接用 `wrangler secret put` 命令设置环境变量：

```bash
# 依次为每个变量设置（按实际需要）
wrangler secret put CF_TOKEN
wrangler secret put CF_GATEWAY
wrangler secret put OPENAI_API_KEY
wrangler secret put G_API_KEY
wrangler secret put G_API_URL
wrangler secret put PASSWORD
```

---

## 3. 配置 wrangler.toml

确保根目录有 `wrangler.toml` 文件，内容示例：

```toml
name = "cf-ai-web"
main = "src/worker.ts"
compatibility_date = "2024-06-01"
```

如需自定义入口文件或变量，请相应修改。

---

## 4. 本地开发调试

```bash
wrangler dev
```

运行后访问提示的本地地址（通常为 http://localhost:8787），测试 API 是否正常。

---

## 5. 代码结构建议

- `src/worker.ts`：Cloudflare Worker 入口，统一分发所有 API 路由
- `utils/`：工具函数，避免 Node.js 专属 API
- `public/`：静态资源（如需通过 Worker 服务，可加静态文件路由）

---

## 6. 部署到 Cloudflare Workers

```bash
wrangler publish
```

部署成功后会输出你的 Workers 访问地址。

---

## 7. 常见问题

- 遇到 “Node.js API 不支持” 报错？请用 Web 标准 API 替换相关用法。
- 环境变量未生效？请确保已用 `wrangler secret put` 正确设置。
- 需要更多 Cloudflare Workers 教程？可查阅官方文档：[https://developers.cloudflare.com/workers/](https://developers.cloudflare.com/workers/)

---

## 8. 参考

- [Cloudflare Workers 官方文档](https://developers.cloudflare.com/workers/)
- [Wrangler 配置文档](https://developers.cloudflare.com/workers/wrangler/)
- [环境变量安全管理](https://developers.cloudflare.com/workers/configuration/secrets/)
