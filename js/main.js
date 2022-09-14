const menu_list_li_a = document.querySelectorAll('.menu_list>li>a');
const welcome = document.querySelector('.welcome');
const intro_message = document.querySelector('.intro_message');
const main_view_list_li = document.querySelectorAll('.main_view_list>li');

setTimeout(() => welcome.classList.add('fill'), 4000);
setTimeout(() => intro_message.classList.add('show'), 4200);
setTimeout(() => main_view_list_li[0].classList.add('show'), 5000);
setTimeout(() => main_view_list_li[1].classList.add('show'), 5500);
setTimeout(() => main_view_list_li[2].classList.add('show'), 6000);
setTimeout(() => main_view_list_li[3].classList.add('show'), 6500);

menu_list_li_a[0].classList.add('menu_selected');