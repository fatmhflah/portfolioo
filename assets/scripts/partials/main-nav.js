export function mainNav() {

    const hamburger = $(".toggler");
    const menu = $(".main-navbar");

    // mobile main nav active toggling
    $(window).resize(function () {
        let windowSize = $(this).innerWidth()
        if (windowSize > 992 ) {
            if ( menu.hasClass('active') ) {
                menu.removeClass('active')
                hamburger.removeClass('active')
                $('.main-nav li .sub-nav-wrapper.show').removeClass('show')
            }
        } else {
            $('.sub-nav-wrapper:visible').css('display','none')
        }
    })

    // adding angle left or right icon to li has sub menu depends on site lang
    if ( $('html').attr('lang') !== 'en' ) {
        $('.main-nav li:has(div)')
            .children('a')
            .append('<i class="icon-angle-left main-nav-icon"></i>')
    } else {
        $('.main-nav li:has(div)')
            .children('a')
            .append('<i class="icon-angle-right main-nav-icon"></i>')
    }

    // main nav hover handler
    $('.main-nav li:has(div)').hover(function () {
        if ( !menu.hasClass('active') ) {
            $(this).children('div').addClass('show')
        }
    },function () {
        if ( !menu.hasClass('active') ) {
            $(this).children('div').removeClass('show')
        }
    })

    // main nav mobile click handler
    $('.main-nav li:has(div) a').click( function () {
        if ($('.main-navbar').hasClass('active') ) {
            if ($(this).siblings('div').is(":visible") ) {
                $(this).siblings('div').removeClass('show')
                $(this).siblings('div').slideUp()
                $(this).removeClass('isShow')
            } else {
                $(this).siblings('div').addClass('show')
                $(this).siblings('div').slideDown()
                $(this).addClass('isShow')
            }
        }
    })

    const subMenus = $('.main-nav .main-nav__item:has(.sub-nav-wrapper)')
    for ( const item of subMenus ) {
        findLeft(item)
    }
}

function findLeft(element) {
    let items = $(element).find('.sub-nav li:has(".sub-nav-wrapper")')
    let fixed = 0
    for (const item of items) {
        const windowWidth = $(window).innerWidth()
        let left = $(item).offset().left
        let links = $(item).children('.sub-nav-wrapper')
        while ( links.length ) {
            if ( $('html').attr('lang') === 'en' || $('html').attr('dir') === 'ltr' ) {
                left = links.offset().left + links.innerWidth() + links.innerWidth() - fixed
                if ( windowWidth - left < 0 ) {
                    fixed = links.innerWidth() * -1
                    links.css({
                        'left': '-100%',
                        'top': '0'
                    })
                }
            } else if ( $('html').attr('lang') === 'fa' || $('html').attr('dir') === 'rtl' ) {
                left = links.offset().left - links.innerWidth() + fixed
                if ( left < 0 ) {
                    fixed = links.innerWidth()
                    links.css({
                        'right': '-100%',
                        'top': '0'
                    })
                }
            }
            links = links.children('.sub-nav-wrapper')
        }
    }
}
