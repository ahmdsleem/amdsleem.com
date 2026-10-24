/*
    amdsleem Core System v1.0
    GSAP Page Flow Controller
    Handles: Page Entrance + Page Exit + Link Interception
*/

/* -----------------------------------------------------------
   1) PAGE ENTRANCE ANIMATION
   ----------------------------------------------------------- */

gsap.from("#main", {
    duration: 0.6,
    opacity: 0,
    y: 40,
    ease: "power2.out"
});

/*
    ملاحظة:
    - الحركة دي بتشتغل أول ما الصفحة تفتح.
    - بتدي إحساس نعومة واحترافية.
*/


/* -----------------------------------------------------------
   2) PAGE EXIT ANIMATION
   ----------------------------------------------------------- */

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    link.addEventListener("click", e => {

        // تجاهل الروابط اللي مش انتقال لصفحة جديدة
        // تجاهل الروابط الخاصة أو التي تفتح في تبويب جديد
        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("https://") ||
            href.startsWith("http://") ||
            link.target === "_blank"
            ) return;

        // تجاهل روابط المقالات لأنها بتفتح Overlay
        if (link.classList.contains("article-link")) return;

        e.preventDefault();

        // حركة الخروج
        gsap.to("#main", {
            duration: 0.5,
            opacity: 0,
            y: -40,
            ease: "power2.in",
            onComplete: () => window.location = href
        });
    });
});

/*
    ملاحظات:
    - أي لينك عادي هيعمل حركة خروج قبل الانتقال.
    - روابط المقالات (article-link) مش هتتأثر.
    - الروابط الداخلية (#) مش هتتأثر.
    - الروابط الخاصة بالاتصال مش هتتأثر.
*/
