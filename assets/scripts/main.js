/* -------------------------------------------- main import -------------------------------------------- */
import { mainNav } from "./partials/main-nav.js";
import { navToggle } from "./partials/nav-toggle.js";


/* -------------------------------------------- helper import -------------------------------------------- */
import { isMobile } from "./partials/helper/mobile-check.js";
import { tooltip } from "./partials/helper/tooltip.js";


/* -------------------------------------------- index import -------------------------------------------- */
import { typed } from "./partials/type.js"
import { gallery } from "./partials/gallery.js";
// import { animate } from "js/animate";
import { theme } from "./partials/theme.js";
/* ------------------------------------------------------------------------------------------------------ */
let mobile = false;
$( function (){

    // main scripts
    mainNav();
    navToggle();

    // helper scripts
    mobile = isMobile();
    tooltip();

    // index scripts
    typed();
    gallery();
    // animate();
    theme();

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    });

    document.addEventListener('click', e => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });

})

