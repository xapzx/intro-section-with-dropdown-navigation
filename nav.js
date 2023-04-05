const toggler = document.querySelector('.navbar-toggler');
const toggler_img = document.querySelector('.navbar-toggler > img');
const nav = document.querySelector('.navbar-menu');

toggler.addEventListener('click', () => {
    if(nav.classList.contains('collapse')) {
        toggler_img.src = "images/icon-close-menu.svg";
    } else {
        toggler_img.src = "images/icon-menu.svg";
    }
    nav.classList.toggle('collapse');
})