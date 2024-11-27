export function theme(){
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

// بررسی وضعیت تم ذخیره شده در localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        sunIcon.style.display = 'none';  // پنهان کردن آیکن خورشید
        moonIcon.style.display = 'block'; // نمایش آیکن ماه
    } else {
        document.body.classList.remove('dark-mode');
        sunIcon.style.display = 'block';  // نمایش آیکن خورشید
        moonIcon.style.display = 'none';  // پنهان کردن آیکن ماه
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // تغییر آیکن‌ها به ترتیب
        if (document.body.classList.contains('dark-mode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
    });


}
