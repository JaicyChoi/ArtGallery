const menu_list_li_a = document.querySelectorAll('.menu_list>li>a');
const wrapper = document.querySelector('.wrapper');

for( let i = 0 ; i < DATA.INVEN.length ; i++ ){
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

    img.src = 'img/inven/' + DATA.INVEN[i].file + '.jpg';
    img.alt = 'inven ' + DATA.INVEN[i].nickname + '님 그림';
    hover_info_date.innerHTML = DATA.INVEN[i].date;
    hover_info_nickname.innerHTML = DATA.INVEN[i].nickname + '@Inven';

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

menu_list_li_a[1].classList.add('menu_selected');
wrapper_li.forEach( (li, index) => li.addEventListener('mouseenter', () => {
    hover_info_wrapper[index].classList.add('hover');
    wrapper_img[index].classList.add('hover');
}));
wrapper_li.forEach( (li, index) => li.addEventListener('mouseleave', () => {
    hover_info_wrapper[index].classList.remove('hover');
    wrapper_img[index].classList.remove('hover');
}));

