// 一番上へ戻るボタンの表示・非表示を制御するJavaScriptコード

window.addEventListener("scroll", function() {
    var scrollButton = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
