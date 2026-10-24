/*
    amdsleem Core System v1.0
    Article Overlay Engine
    Handles: Fetch + Open + Close + GSAP Animations
*/

/* -----------------------------------------------------------
   1) OPEN ARTICLE (Fetch + Display)
   ----------------------------------------------------------- */

document.querySelectorAll(".article-link").forEach(link => {

    link.addEventListener("click", e => {
        e.preventDefault();

        const url = link.dataset.article;
        if (!url) return;

        openArticle(url);
    });
});

function openArticle(url) {

    // تحميل ملف المقال
    fetch(url)
        .then(res => res.text())
        .then(html => {

            // إدخال المحتوى داخل الـ overlay
            const container = document.querySelector("#article-content");
            container.innerHTML = html;

            // إظهار الـ overlay
            const overlay = document.querySelector("#article-overlay");
            overlay.style.display = "flex";

            // حركة دخول المقال
            gsap.from(".article-box", {
                duration: 0.4,
                opacity: 0,
                y: 20,
                ease: "power2.out"
            });
        })
        .catch(err => {
            console.error("Error loading article:", err);
        });
}


/* -----------------------------------------------------------
   2) CLOSE ARTICLE (Button + Outside Click)
   ----------------------------------------------------------- */

// زر الإغلاق
document.querySelector("#close-article").addEventListener("click", () => {

    gsap.to(".article-box", {
        duration: 0.3,
        opacity: 0,
        y: -15,
        ease: "power2.in",
        onComplete: () => {

            // إخفاء الـ overlay
            const overlay = document.querySelector("#article-overlay");
            overlay.style.display = "none";

            // مسح محتوى المقال
            document.querySelector("#article-content").innerHTML = "";

            // 🔥 حل مشكلة عدم فتح مقال بعد مقال
        document.querySelector(".article-box").removeAttribute("style");
        }
    });
});

// إغلاق عند الضغط خارج الصندوق
document.querySelector("#article-overlay").addEventListener("click", e => {
    if (e.target.id === "article-overlay") {
        document.querySelector("#close-article").click();
    }
});

/* -----------------------------------------------------------
   3) OPEN ARTICLE FROM URL (Direct Link)
   ----------------------------------------------------------- */

function checkDirectArticle() {
    const params = new URLSearchParams(window.location.search);
    const article = params.get("article");

    if (article) {
        const url = `articles/${article}.html`;
        openArticle(url);
    }
}

// تشغيل الفحص بعد تحميل الصفحة
window.addEventListener("DOMContentLoaded", checkDirectArticle);
