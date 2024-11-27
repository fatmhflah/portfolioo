import { mainHeight } from "./partials/helper/main-height.js";

$( function (){
    const char = /([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g

    mainHeight();

    fetch('./fafa-web.json')
        .then(res => {
            return res.json()
        })
        .then(data => {
            const iconSets = data.iconSets

            for (const iconSet of iconSets) {
                $('#icons .container>.row').append(`
                    <div class="col-12">
                        <div class="row g-3 wrapper-wrapper" id="${iconSet.metadata.name.replaceAll(' ', '').replace(char, "_")}">
                            <div class="col-12">
                                <h2>${iconSet.metadata.name}</h2>
                            </div>
                            <div class="not-found">
                                <i class="icon-alert-warning"></i>
                                <span>هیچ آیکون مطابقی با 
                                    <span class="not-found__result"></span>
                                    در مجموعه
                                    <span>"${iconSet.metadata.name}"</span>
                                    ندارید
                                </span>
                            </div>
                        </div>
                    </div>
                `)

                const icons = quickSort(iconSet.selection, 0, iconSet.selection.length-1)

                for (const icon of icons) {
                    $(`#${iconSet.metadata.name.replaceAll(' ', '').replace(char, "_")}`).append(`
                        <div class="col-lg-3">
                            <div class="wrapper-icon">
                                <span>icon-${icon.name}</span>
                                <i class="icon-${icon.name}"></i>
                            </div>
                        </div>
                    `)
                }
            }

        })

    $('#icons').on('click', '.wrapper-icon', function () {
        if ( !$(this).hasClass('active') ) {
            const text = $(this).children('span').text()
            navigator.clipboard.writeText(text)

            $(this).addClass('active')
            setTimeout(() =>  {
                $(this).removeClass('active')
            }, 1500)
        }
    })


    $('#icon-search').focus(function () {
        $(this).select()
    })

    $('#icon-search').on('keyup', function(){
        const searchValue = $(this).val().toLowerCase();
        $('.not-found__result').text(searchValue)

        $('.wrapper-icon').each(function(){
            const icon = $(this).children('span').text()

            if ( icon.includes(searchValue) ) {
                $(this).parent().show()
            } else {
                $(this).parent().hide()
            }

        });

        const wrappers = $('.wrapper-wrapper')
        for (const wrapper of wrappers) {
            if ( $(wrapper).children('.not-found').is(':visible') ) {
                if ( $(wrapper).find('.wrapper-icon:visible').length > 0 ) {
                    $(wrapper).children('.not-found').removeClass('active')
                }
            } else {
                if ( $(wrapper).find('.wrapper-icon:visible').length === 0 ) {
                    $(wrapper).children('.not-found').addClass('active')
                }
            }
        }

    });

})

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function partition(arr, l, h) {
    const pivot = arr[h].name
    let i = l -1

    for (let j = l; j <= h; j++) {
        if ( arr[j].name < pivot ) {
            i++
            swap(arr, i, j)
        }
    }

    swap(arr, i+1, h)
    return i + 1
}

function quickSort(arr, l, h) {
    if (l < h) {
        const p = partition(arr, l, h)
        quickSort(arr, l, p-1)
        quickSort(arr, p+1, h)
    }

    return arr
}
