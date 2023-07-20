const welcome = document.querySelector('.welcome');
const intro_message = document.querySelector('.intro_message');
const main_view = document.querySelector('.main_view');
const main_view_list = document.querySelector('.main_view_list');
const main_view_list_li = document.querySelectorAll('.main_view_list>li');

const menu_list_li_a = document.querySelectorAll('.menu_list>li>a');
menu_list_li_a[0].classList.add('menu_selected');

setTimeout(() => welcome.classList.add('fill'), 4000);
setTimeout(() => intro_message.classList.add('show'), 4200);
setTimeout(() => main_view_list.classList.add('show'), 4800);
setTimeout(() => main_view_list_li[0].classList.add('show'), 5000);
setTimeout(() => main_view_list_li[1].classList.add('show'), 5500);
setTimeout(() => main_view_list_li[2].classList.add('show'), 6000);
setTimeout(() => main_view_list_li[3].classList.add('show'), 6500);

main_view_list_li[0].addEventListener('mouseenter', () => {
    main_view.classList.add('inven');
    main_view.classList.remove('sns_view');
    main_view.classList.remove('in-game');
    main_view.classList.remove('partner');
});
main_view_list_li[1].addEventListener('mouseenter', () => {
    main_view.classList.add('sns_view');
    main_view.classList.remove('inven');
    main_view.classList.remove('in-game');
    main_view.classList.remove('partner');
});
main_view_list_li[2].addEventListener('mouseenter', () => {
    main_view.classList.add('in-game');
    main_view.classList.remove('inven');
    main_view.classList.remove('sns_view');
    main_view.classList.remove('partner');
});
main_view_list_li[3].addEventListener('mouseenter', () => {
    main_view.classList.add('partner');
    main_view.classList.remove('inven');
    main_view.classList.remove('sns_view');
    main_view.classList.remove('in-game');
});
main_view_list.addEventListener('mouseleave', () => {
    main_view.classList.remove('inven');
    main_view.classList.remove('sns_view');
    main_view.classList.remove('in-game');
    main_view.classList.remove('partner');
});

const sns = document.querySelector('.sns');
const nickname_wrapper = document.querySelector('.nickname_wrapper');
const menu = document.querySelector('.menu');

if( window.innerHeight < 820 ){
    sns.classList.add('max-height');
    nickname_wrapper.classList.add('max-height');
    menu.classList.add('max-height');
}
else{
    sns.classList.remove('max-height');
    nickname_wrapper.classList.remove('max-height');
    menu.classList.remove('max-height');
}

window.addEventListener('resize', () => {
    if( window.innerHeight < 820 ){
        sns.classList.add('max-height');
        nickname_wrapper.classList.add('max-height');
        menu.classList.add('max-height');
    }
    else{
        sns.classList.remove('max-height');
        nickname_wrapper.classList.remove('max-height');
        menu.classList.remove('max-height');
    }
});

const sns_list = document.querySelectorAll('.sns_list>li>a');

sns_list.forEach( a => a.addEventListener('mouseenter', () => {
    a.children[1].classList.add('hover');
}));
sns_list.forEach( a => a.addEventListener('mouseleave', () => {
    a.children[1].classList.remove('hover');
}));