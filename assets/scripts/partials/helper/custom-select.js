export function customSelect() {

    $(document).click(function (event) {
        event.stopPropagation();
        const container = $('.custom-select__wrapper')

        if ( container.has(event.target).length === 0 ) {
            hideSelect(container)
        }
    })

    if ( $('.custom-select__wrapper').parents(".modal").length ) {
        const modals = $(".modal:has(.custom-select__wrapper)")

        for (const modal of modals) {
            $(modal).on('click', ".custom-select__wrapper", function () {
                selectShowHandler(this)
            })

            $(modal).on("click", ".select-dropdown .select-dropdown__item", function () {
                itemClickHandler(this)
            })
        }
    } else {
        $('.custom-select__wrapper').click(function() {
            selectShowHandler(this)
        });

        $('.select-dropdown .select-dropdown__item').click(function() {
            itemClickHandler(this)
        })
    }
}

const selectShowHandler = (element) => {
    if ( !$(element).hasClass('active') ) {
        showSelect($(element))
    } else {
        hideSelect($(element))
    }
}

const itemClickHandler = (element) => {
    if ( !$(element).hasClass("active") ) {
        let value = $(element).text()
        $(".select-dropdown .select-dropdown__item.active").removeClass("active")
        $(element).addClass("active")

        $(element).parent().siblings('.custom-select__wrapper .select').children('span').text(value)
        $(element).parent().siblings('.custom-select__wrapper').addClass("chosen")
        $(element).parent().siblings('input').val(value)
    }
}

const showSelect = (select) => {
    select.addClass('active')
    select.children('.select-dropdown').fadeIn('fast')
}

const hideSelect = (select) => {
    select.removeClass('active')
    select.children('.select-dropdown').fadeOut('fast')
}