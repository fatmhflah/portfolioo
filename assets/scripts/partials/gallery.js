export function gallery() {
    document.addEventListener("DOMContentLoaded", function() {
        Fancybox.bind("[data-fancybox]", {
            Toolbar: {
                display: [
                    { id: "zoom", position: "center" },
                    { id: "close", position: "right" }
                ]
            },
            Thumbs: {
                autoStart: true, // نمایش نوار تصاویر کوچک
            },
            zoom: true // فعال کردن قابلیت زوم
        });
    });

}
