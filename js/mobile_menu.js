const mobile_icon = document.querySelector('.mobile_icon');
const mobile_arrow = document.querySelector('.mobile_arrow');
const menu = document.querySelector('.menu');

mobile_icon.addEventListener('click', () => {
    menu.classList.add('show');
    mobile_icon.classList.add('hide');
    mobile_arrow.classList.add('show');
    show_bg.classList.add('show_menu');
});
mobile_arrow.addEventListener('click', () => {
    menu.classList.remove('show');
    mobile_icon.classList.remove('hide');
    mobile_arrow.classList.remove('show');
    show_bg.classList.remove('show_menu');
});
show_bg.addEventListener('click', () => {
    menu.classList.remove('show');
    mobile_icon.classList.remove('hide');
    mobile_arrow.classList.remove('show');
    show_bg.classList.remove('show_menu');
});