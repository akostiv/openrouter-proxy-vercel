export async function POST(request: Request) {
  const url = new URL(request.url);
  url.hostname = "openrouter.ai";
  url.pathname = url.pathname.replace("/proxy", "");

  console.log(`Modified url: ${url.toString()}`);
  const modifiedRequest = new Request(url, request);
  const response = await fetch(modifiedRequest);

  return new Response(response.body, response);
}
