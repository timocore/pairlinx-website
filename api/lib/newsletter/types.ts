export type ApiRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  query?: Record<string, string | string[] | undefined>;
  socket?: { remoteAddress?: string };
};

export type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  redirect: (status: number, url: string) => void;
};

export type SubscribeStatus = "confirmation_sent" | "already_subscribed";

export type SubscribeResponse =
  | { ok: true; status: SubscribeStatus }
  | { ok: false; error: string };
