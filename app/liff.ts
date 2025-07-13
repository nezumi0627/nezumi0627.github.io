import liff from '@line/liff'; // LIFF SDKのインポート
const LIFF_ID = "2005745965-l80BDaKA";

interface CustomMessage {
    type: "text";
    text: string;
    sentBy: {
        label: string;
        iconUrl: string;
        linkUrl: string;
    };
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await liff.init({ liffId: LIFF_ID });
        if (liff.isInClient()) {
            await initializeLiff();
        }
    } catch (error) {
        console.error("LIFF Initialization failed", error);
    }
});

async function initializeLiff() {
    try {
        if (!liff.isLoggedIn()) {
            window.alert("LINE to login");
            liff.login();
        } else {
            await checkUrlParams();
        }
    } catch (error) {
        console.error("Error initializing LIFF", error);
    }
}

async function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    // 1) ?text=xxx クエリを優先
    let text = urlParams.get("text");

    // 2) もしクエリになく、パスの末尾に文字列があればそれを利用する
    if (text === null || text === "") {
        const pathSegments = window.location.pathname.split("/").filter(Boolean);
        if (pathSegments.length > 0) {
            text = decodeURIComponent(pathSegments[pathSegments.length - 1]);
        }
    }

    if (text !== null && text !== "") {
        await sendMessage({
            type: "text",
            text: text,
            sentBy: {
                label: "Nezumi-Project@2025",
                iconUrl: "https://raw.githubusercontent.com/nezumi0627/nezuminium.github.io/main/icon.gif",
                linkUrl: "https://nezumi0627.github.io/nezuminium.github.io/"
            }
        });
        liff.closeWindow();
    }
}

async function sendMessage(message: CustomMessage) {
    try {
        await liff.sendMessages([message]);
    } catch (error) {
        console.error("Error sending message", error);
    }
}