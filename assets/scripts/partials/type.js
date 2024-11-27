export  function typed() {

        var typedItems = document.querySelector(".typing-title").getAttribute("data-typed-items").split(",");
        console.log(typedItems)
        new Typed(".typing-title", {
            strings: typedItems,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            startDelay: 500,
            loop: true
        });


}
