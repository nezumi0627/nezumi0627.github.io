import "@line/liff";

declare module "@line/liff" {
  interface Liff {
    /**
     * Close the current LIFF webview.
     */
    closeWindow(): void;
  }
}
