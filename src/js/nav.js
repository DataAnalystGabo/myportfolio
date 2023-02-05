const nav       = document.getElementById('nav');
const navItems  = document.getElementById('navitems')
const menuOpen  = document.getElementById('menuopen');
const menuClose = document.getElementById('menuclose');
const navLinks  = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', ()=>{
    (window.scrollY>0)
    ?nav.classList.add('nav--active')
    :nav.classList.remove('nav--active');
})

const showMenu = ()=>{
    menuOpen.style = `
        opacity:0;
        visibility:hidden;
        transform:scale(0);
    `
    menuClose.style = `
        opacity:1;
        visibility:visible;
        transform:scale(1);
    `
    navItems.classList.add('nav__items--active')
}
       
const hiddenMenu = ()=>{
    menuOpen.style = `
        opacity:1;
        visibility:visible;
        transform:scale(1);
    `
    menuClose.style = `
        opacity:0;
        visibility:hidden;
        transform:scale(0);
    `
    navItems.classList.remove('nav__items--active')
}

menuOpen.addEventListener('click', showMenu);
menuClose.addEventListener('click', hiddenMenu);

navLinks.forEach(link => {
    link.addEventListener('click', hiddenMenu);
});