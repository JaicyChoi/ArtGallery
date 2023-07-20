const mobile_icon = document.querySelector('.mobile_icon');
const mobile_arrow = document.querySelector('.mobile_arrow');
const show_menu_bg = document.querySelector('.show_menu_bg');

mobile_icon.addEventListener('click', () => {
    menu.classList.add('show');
    mobile_icon.classList.add('hide');
    mobile_arrow.classList.add('show');
    show_menu_bg.classList.add('show');
    body.classList.add('lock');
});
mobile_arrow.addEventListener('click', () => {
    menu.classList.remove('show');
    mobile_icon.classList.remove('hide');
    mobile_arrow.classList.remove('show');
    show_menu_bg.classList.remove('show');
    body.classList.remove('lock');
});
show_menu_bg.addEventListener('click', () => {
    menu.classList.remove('show');
    mobile_icon.classList.remove('hide');
    mobile_arrow.classList.remove('show');
    show_menu_bg.classList.remove('show');
    body.classList.remove('lock');
});