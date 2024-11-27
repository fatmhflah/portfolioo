export function animate() {

        $(document).ready(function () {
            // هنگام کلیک روی هر آیتم منو، کلاس‌ها رو به درستی اعمال کن
            $('#menu-main-menu a').on('click', function (e) {
                var targetContent = $(this).attr('href'); // پیدا کردن ID محتوای مربوطه

                // از نمایش همزمان تمام محتواها جلوگیری کن
                $('.tab-pane').removeClass('active fade-in-down'); // حذف انیمیشن‌ها از تمامی محتواها
                $('.tab-pane').hide(); // مخفی کردن همه محتواها

                // نمایش محتوای انتخاب شده با انیمیشن
                $(targetContent).show().addClass('active fade-in-down'); // نمایش محتوای انتخاب شده با انیمیشن
            });

            // برای نمایش اولیه محتوای فعال، انیمیشن رو برای اولین محتوا اعمال می‌کنیم
            setTimeout(function () {
                $('#menu-main-menu a.active').click();
            }, 50); // ایجاد تأخیر برای اعمال انیمیشن
        });




}
