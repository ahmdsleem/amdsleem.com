/*
    amdsleem Core System v1.0
    Core Initialization File
    Basic page setup + preload removal
*/

// إزالة كلاس الـ preload بعد تحميل الصفحة
window.addEventListener("load", () => {
    document.body.classList.remove("is-preload");
});

/*
    ملاحظات مهمة:

    - الملف ده بسيط جدًا لأنه الأساس.
    - أي إعدادات عامة للمشروع هنضيفها هنا.
    - أي متغيرات مشتركة بين الملفات هنحطها هنا.
    - أي دوال عامة مش مرتبطة بالـ GSAP أو المقالات هتكون هنا.
*/
