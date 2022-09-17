const top_btn_wrapper = document.querySelector('.top_btn_wrapper');
const top_btn = document.querySelector('.top_btn');
const gallery_view = document.querySelector('.gallery_view');

top_btn.addEventListener('click', () => {
    gallery_view.scrollIntoView({behavior: "smooth"});
})

window.addEventListener('scroll', () => {
    if( window.scrollY > 430 ){
        top_btn_wrapper.classList.add('show');
    }
    else
        top_btn_wrapper.classList.remove('show');
})