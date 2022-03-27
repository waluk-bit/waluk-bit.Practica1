(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const stopScroll = document.querySelector('body')

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
        stopScroll.classList.add('body--scroll');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        stopScroll.classList.remove('body--scroll');
    });

    /* toggle si tengo una clase la elimina y
    si no la tiene la agrega
    En este caso no sirve  */
})();