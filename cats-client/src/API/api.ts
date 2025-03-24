type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions<T = unknown> {
  method?: HttpMethod;
  body?: T;
  headers?: Record<string, string>;
}

const JSON_CONTENT_TYPE_HEADER = { "Content-Type": "application/json" };

export const httpRequest = async <ResponseType, RequestType = unknown>(
  url: string,
  { method = "GET", body, headers = {} }: FetchOptions<RequestType> = {}
): Promise<ResponseType> => {
  const response = await fetch(url, {
    method: method,
    headers: { ...JSON_CONTENT_TYPE_HEADER, ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
