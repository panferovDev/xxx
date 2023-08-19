export async function GET(request: Request): Promise<Response> {
  return new Response('Hello, from API!');
}

export async function POST(request: Request): Promise<Response> {
  const data = await request.json();
  return new Response(`Hello, from API! ${data}`);
}
