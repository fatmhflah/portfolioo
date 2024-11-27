export function contactUsValidation() {
    const target = '#contactUsForm'
    const rules = {
        contact: {
            required: true,
        },
        name: {
            required: true,
        },
        captcha: {
            required: true,
            digits: true,
            minlength: 4
        },
        messageBox: {
            required: true,
            minlength: 4
        },
        subject: {
            required: true
        }
    };
    const messages = {
        name: 'نام و نام خانوادگی خود را وارد کنید',
        contact: 'ایمیل یا موبایل خود را وارد کنید',
        captcha: {
            required: 'کد امنیتی خود را وارد کنید',
            digits: 'کد امنتیتی باید عدد باشد',
            minlength: 'کد امنیتی باید 4 عدد باشد'
        },
        email: {
            required: ' ایمیل خود را وارد کنید',
            email: 'ایمیل معتبر وارد نشده است',

        },
        messageBox: {
            required: 'متن پیام خود را وارد کنید',
            minlength: ' متن پیام حداقل باید 4 عدد باشد'
        },
        subject: "وارد کردن موضوع الزامی است"
    }
    return {target, rules, messages}
}