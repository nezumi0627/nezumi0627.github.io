import liff from '@line/liff'; // LIFF SDKのインポート
const LIFF_ID = "2005745965-aPK89ROX";

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
    const textParam = urlParams.get("text");

    if (textParam !== null) {
        await sendMessage({
            type: "text",
            text: textParam,
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