//*!    MENU MOBILE ==============================


const menuTop = document.querySelector('.menu__top');
const body = document.querySelector('body');

document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  menuTop.classList.toggle('menu__top__active');
  body.classList.toggle('no-scroll');

  menuTop.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if(a.closest('.menu__top__active')){
        document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
        menuTop.classList.toggle('menu__top__active');
        body.classList.toggle('no-scroll');
      }
    })
  })
}


//*!    FOOTER SPOILER ==============================

const arrFooterTitle = Array.from(document.querySelectorAll('.footer__title'));

arrFooterTitle.forEach(function(title){
  title.dataset.action = 'spoiler';
})

window.addEventListener('click', function(event){
  
  if(event.target.dataset.action === 'spoiler'){
    event.target.closest('.footer__column').classList.toggle('footer__column__spoiler-active');
  }
})
  


//*!    SLIDER ==============================



const arrSlideTitle = ['Amazing service', 'Big choice', 'Beautiful furniture',];
const arrSlideReview = [`Since the online marketplace can be a scary place,
 the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers. `,
`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Voluptatem quis deleniti dolorum accusamus, velit iusto! 
Maxime soluta sequi harum. Architecto, sunt? 
A unde minus, corrupti itaque autem dolorum. Reiciendis, modi.`, `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Quis rem officiis cumque reprehenderit eaque totam, doloremque eligendi sit?
          Quis commodi voluptatibus laboriosam unde quas quasi nemo.`,];
const arrCustomerNames = ['Wade Warren', 'Bonnie Turner', 'Xayvion Peterson',];
const arrCustomerJobs = ['Doctor', 'Developer', 'Cook'];


const bttnPrev = document.querySelector('.slider__bttn__prev');
const bttnNext = document.querySelector('.slider__bttn__next');
const sliderImg = document.querySelector('#slide-img');
const sliderTitle = document.querySelector('.slider__title');
const sliderReviev = document.querySelector('.slider__text');
const customerName = document.querySelector('.costomer__name');
const customerJob = document.querySelector('.customer__profession');



const arrSlideImg = Array.from(document.querySelectorAll('.slider__main__image'));

arrSlideImg.forEach(function(item, index){
  let i = index;
  item.dataset.index = index;
  if(index !== 0){
    item.classList.add('none')
  }
  arrSlideImg[0].setAttribute('data-active', '')

  item.addEventListener('click', function(){
    showNextSlide('next');
  })
});

bttnNext.onclick = function() {
  showNextSlide('next');
}

bttnPrev.onclick = function() {
  showNextSlide('prev');
 }

function showNextSlide(direction){
  const slideImgActive = document.querySelector('[data-active]');
  const slideImgActiveIndex = +slideImgActive.dataset.index;
  
  slideImgActive.classList.add('none');
  slideImgActive.removeAttribute('data-active');

  let nextImgIndex;
  if(direction === 'next'){
     nextImgIndex = slideImgActiveIndex+1 === arrSlideImg.length ? 0 : slideImgActiveIndex + 1;
  }else if(direction === 'prev'){
     nextImgIndex = slideImgActiveIndex === 0 ? arrSlideImg.length - 1 : slideImgActiveIndex - 1;
  }

  const nextImg = document.querySelector(`[data-index="${nextImgIndex}"]`);
     nextImg.classList.remove('none');
     nextImg.setAttribute('data-active', '');
     sliderTitle.innerHTML = arrSlideTitle[nextImgIndex];
     sliderReviev.innerHTML = arrSlideReview[nextImgIndex];
     customerJob.innerHTML = arrCustomerJobs[nextImgIndex];
     customerName.innerHTML = arrCustomerNames[nextImgIndex];
}


new WOW().init();