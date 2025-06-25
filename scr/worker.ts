export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // 示例 hello 路由
    if (url.pathname === "/api/hello") {
      return new Response(JSON.stringify({ message: "Hello from Cloudflare Worker!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // OpenAI 代理
    if (url.pathname === "/api/auth/openai" && request.method === "POST") {
      // ...OpenAI 路由处理逻辑...
    }

    // Gemini 代理
    if (url.pathname === "/api/auth/gemini" && request.method === "POST") {
      // ...Gemini 路由处理逻辑...
    }

    // Workers AI 聊天
    if (url.pathname === "/workers" && request.method === "POST") {
      // ...Workers AI 路由处理逻辑...
    }

    // Workers AI 图像
    if (url.pathname === "/workers/image" && request.method === "POST") {
      // ...Workers AI 图像逻辑...
    }

    // 其它路由...

    // 默认 404
    return new Response("Not found", { status: 404 });
  }
};