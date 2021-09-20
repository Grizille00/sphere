const ham = document.querySelector(".hamburger")
const nav = document.querySelector(".my-nav")
ham.addEventListener('click',()=>{
    ham.classList.toggle('open')
    nav.classList.toggle('open')
})


$(window).on("load", function() {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');

    // if($('body').attr('data-sidebar-position') === "fixed") {
    //     $('.quixnav-scroll').slimscroll({
    //         position: "right",
    //         size: "5px",
    //         height: "100%",
    //         color: "transparent"
    //     });
    // }
});