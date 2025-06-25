export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // ʾ�� hello ·��
    if (url.pathname === "/api/hello") {
      return new Response(JSON.stringify({ message: "Hello from Cloudflare Worker!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // OpenAI ����
    if (url.pathname === "/api/auth/openai" && request.method === "POST") {
      // ...OpenAI ·�ɴ����߼�...
    }

    // Gemini ����
    if (url.pathname === "/api/auth/gemini" && request.method === "POST") {
      // ...Gemini ·�ɴ����߼�...
    }

    // Workers AI ����
    if (url.pathname === "/workers" && request.method === "POST") {
      // ...Workers AI ·�ɴ����߼�...
    }

    // Workers AI ͼ��
    if (url.pathname === "/workers/image" && request.method === "POST") {
      // ...Workers AI ͼ���߼�...
    }

    // ����·��...

    // Ĭ�� 404
    return new Response("Not found", { status: 404 });
  }
};