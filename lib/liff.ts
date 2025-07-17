import liff from "@line/liff";

const LIFF_ID = "2005745965-l80BDaKA";

export interface CustomMessage {
  type: "text";
  text: string;
  sentBy: {
    label: string;
    iconUrl: string;
    linkUrl: string;
  };
}

/**
 * 初期化
 */
let initialized = false;
export async function ensureInit() {
  if (!initialized) {
    await liff.init({ liffId: LIFF_ID });
    initialized = true;
  }
}

/**
 * ログインしていなければログイン要求。
 */
export async function loginIfNeeded() {
  // URL に text パラメータがある場合のみログインを要求
  const shouldLogin =
    typeof window !== "undefined" &&
    extractTextFromUrl(new URL(window.location.href)) !== undefined;

  if (shouldLogin && !liff.isLoggedIn()) {
    liff.login();
    // login() を呼ぶとページ遷移するのでここでは処理終了
    return false;
  }
  // ログイン不要、または既にログイン済みの場合は true を返す
  return true;
}

/**
 * URL から送信対象テキストを抽出
 */
export function extractTextFromUrl(url: URL): string | undefined {
  const qp = url.searchParams.get("text");
  if (qp && qp.trim() !== "") {
    return qp.trim();
  }
  return undefined;
}

export async function sendMessage(message: CustomMessage) {
  await liff.sendMessages([message]);
}
