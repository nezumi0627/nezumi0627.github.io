// 404エラーが発生した場合にリダイレクト
window.addEventListener("error", function(e) {
    if (e && e.target && e.target.src && e.target.src.endsWith("style.css")) {
        // 404エラーが style.css から発生した場合のリダイレクト
        window.location.href = "https://nezumi0627.github.io/404.github.io";
    }
});

