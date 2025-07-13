declare module '@line/liff' {
    export function init(config: { liffId: string }): Promise<void>;
    export function isInClient(): boolean;
    export function isLoggedIn(): boolean;
    export function login(): void;
    export function sendMessages(messages: CustomMessage[]): Promise<void>;

    // Message interface
    export interface CustomMessage {
        type: "text";
        text: string;
        sentBy: {
            label: string;
            iconUrl: string;
            linkUrl: string;
        };
    }
}
