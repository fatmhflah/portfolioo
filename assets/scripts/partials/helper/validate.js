export function validate(target, rules, messages) {
    $(target).validate({
        errorElement: "em",
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        rules,
        messages,
    });
}