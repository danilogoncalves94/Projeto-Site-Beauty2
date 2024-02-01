function f1() {
    $('header').css({
        opacity: '1'
    })
}

$(document).ready(function () {
    ScrollReveal().reveal('.titulo', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 300,
        easing: 'ease-in-out',
        reset: false,
    })
    /*ScrollReveal().reveal('.subtitulo', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 900,
        easing: 'ease-in-out',
        reset: false,
    })*/
    ScrollReveal().reveal('.cabelo1', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 300,
        easing: 'ease-in-out',
        reset: false,
    })
    ScrollReveal().reveal('.cabelo2', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 1000,
        easing: 'ease-in-out',
        reset: false,
    })
    ScrollReveal().reveal('.cabelo3', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 1500,
        easing: 'ease-in-out',
        reset: false,
    })
    ScrollReveal().reveal('.cabelo4', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 2000,
        easing: 'ease-in-out',
        reset: false,
    })
    ScrollReveal().reveal('.logowhats', {
        origin: 'bottom',
        distance: '50px',
        duration: 1500,
        delay: 300,
        easing: 'ease-in-out',
        reset: false,
    })
    ScrollReveal().reveal('.logoinsta', {
        origin: 'bottom',
        distance: '50px',
        duration: 1100,
        delay: 600,
        easing: 'ease-in-out',
        reset: false,
    })
})