const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })
}

const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    slidesPreView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPreView: 3,
            centeredSlides: 'auto',
        },
        1152: {
            centeredSlides: 'auto',
            spaceBetween: -64,
        },
    }
});
const bgHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : 
    header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);

const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    // reset: true
})
sr.reveal(`.home__swiper, .home__footer`)
sr.reveal(`.home__circle`, {scale:2, delay:300})
sr.reveal(`.home__subcircle`, {scale:2, delay:400})
sr.reveal(`.home__title`, {scale:1.5, origin:'bottom', delay:1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`, {origin:'bottom'})