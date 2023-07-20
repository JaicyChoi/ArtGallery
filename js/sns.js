const wrapper = document.querySelector('.wrapper');

for( let i = 0 ; i < DATA.SNS.length ; i++ ){
    let li = document.createElement('li');
    let img_wrppaer = document.createElement('div');
    let img = document.createElement('img');
    let hover_info_wrapper = document.createElement('div');
    let hover_info = document.createElement('div');
    let hover_info_date = document.createElement('p');
    let hover_info_nickname = document.createElement('p');

    img_wrppaer.classList.add('img_wrppaer');
    hover_info_wrapper.classList.add('hover_info_wrapper');
    hover_info.classList.add('hover_info');
    hover_info_date.classList.add('hover_info_date');
    hover_info_nickname.classList.add('hover_info_nickname');

    img.src = 'img/sns/' + DATA.SNS[i].file + '.png';
    img.alt = 'sns ' + DATA.SNS[i].nickname + '님 그림';
    hover_info_date.innerHTML = DATA.SNS[i].date;
    hover_info_nickname.innerHTML = '@' + DATA.SNS[i].nickname + '(twitter)';

    hover_info.appendChild(hover_info_date);
    hover_info.appendChild(hover_info_nickname);
    hover_info_wrapper.appendChild(hover_info);
    img_wrppaer.appendChild(img);
    img_wrppaer.appendChild(hover_info_wrapper);
    li.appendChild(img_wrppaer);
    wrapper.append(li);
}

const wrapper_li = document.querySelectorAll('.wrapper>li');
const hover_info_wrapper = document.querySelectorAll('.hover_info_wrapper');
const wrapper_img = document.querySelectorAll('.img_wrppaer>img');
const show_bg = document.querySelector('.show_bg');
const body = document.querySelector('body');

// menu_list_li_a[1].classList.add('menu_selected');
wrapper_li.forEach( (li, index) => li.addEventListener('mouseenter', () => {
    hover_info_wrapper[index].classList.add('hover');
    wrapper_img[index].classList.add('hover');
}));
wrapper_li.forEach( (li, index) => li.addEventListener('mouseleave', () => {
    hover_info_wrapper[index].classList.remove('hover');
    wrapper_img[index].classList.remove('hover');
}));
wrapper_li.forEach( (li, index) => li.addEventListener('click', () => {
    hover_info_wrapper[index].classList.add('hover2');

    let show_pic_wrap = document.createElement('div');
    let img = document.createElement('img');
    let show_pic_info_wrap = document.createElement('div');
    let show_pic_info_date = document.createElement('p');
    let show_pic_info_nickname = document.createElement('p');

    show_pic_wrap.classList.add('show_pic_wrap');
    show_pic_info_wrap.classList.add('show_pic_info_wrap');
    show_pic_info_date.classList.add('show_pic_info_date');
    show_pic_info_nickname.classList.add('show_pic_info_nickname');
    body.classList.add('lock');
    show_bg.classList.add('show');

    img.src = 'img/sns/' + DATA.SNS[index].file + '.png';
    img.alt = 'sns ' + DATA.SNS[index].nickname + '님 그림';
    show_pic_info_date.innerHTML = DATA.SNS[index].date;
    show_pic_info_nickname.innerHTML = '@' + DATA.SNS[index].nickname + '(twitter)';

    show_pic_info_wrap.appendChild(show_pic_info_date);
    show_pic_info_wrap.appendChild(show_pic_info_nickname);
    show_pic_wrap.appendChild(img);
    show_pic_wrap.appendChild(show_pic_info_wrap);
    show_bg.appendChild(show_pic_wrap);
}));
show_bg.addEventListener('click', () => {
    const show_pic_wrap = document.querySelector('.show_pic_wrap');
    show_bg.removeChild(show_pic_wrap);
    for( let i = 0 ; i <  DATA.SNS.length; i++ )
        hover_info_wrapper[i].classList.remove('hover2');
    show_bg.classList.remove('show');
    body.classList.remove('lock');
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