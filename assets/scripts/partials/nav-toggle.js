export function navToggle() {
    const menu = $(".main-navbar");
    const hamburger = $(".toggler");
    const overlay = $('.navbar-overlay')

    hamburger.click(function () {
        if ( !$(this).hasClass('active') ) {
            activeMenu($(this),menu)
        }
        else {
            inActiveMenu($(this),menu)
        }
    })

    // overlay click handler
    overlay.click(function () {
        if ( menu.hasClass('active') ) {
            inActiveMenu(hamburger, menu)
        }
    })

    $(window).resize(function () {
        let pageWidth = $(this).innerWidth()

        if ( pageWidth > 992 && $('.navbar-nav').hasClass('open') ) {
            $('.navbar-nav').removeClass('open')
            $('.toggler').removeClass('active')
        }
    })

    // swipe left to open
    if ( $(window).innerWidth() < 992 ) {
        let startingX, startingY, movingX, movingY;
        document.body.addEventListener("touchstart", function (event) {
            startingX = event.touches[0].clientX;
            startingY = event.touches[0].clientY;
        })
        document.body.addEventListener("touchmove", function (event) {
            movingX = event.touches[0].clientX;
            movingY = event.touches[0].clientY;
        })
        document.body.addEventListener("touchend", function () {
            if ($("html").attr("dir") === "rtl") {
                if (startingX + 100 < movingX) {
                    if (hamburger.hasClass("active")) {
                        inActiveMenu(hamburger, menu)
                    }
                } else if (
                  startingX - 100 > movingX &&
                  $(window).innerWidth() - startingX < 50
                ) {
                    if (!menu.hasClass("active")) {
                        activeMenu(hamburger, menu)
                    }
                }
            } else {
                if (startingX < 100) {
                    if (!menu.hasClass("active")) {
                        activeMenu(hamburger, menu)
                    }
                } else if (startingX - 100 > movingX) {
                    if (hamburger.hasClass("active")) {
                        inActiveMenu(hamburger, menu)
                    }
                }
            }

        })
    }

}

function activeMenu(el, menu) {
    el.addClass('active');
    menu.addClass('active');
    $('html').css({
        'height': '100vh',
        'overflow': 'hidden',
    })
}

function inActiveMenu(el, menu) {
    el.removeClass('active');
    menu.removeClass('active');
    $('html').css({
        'height': 'auto',
        'overflow': 'auto',
    })
}
