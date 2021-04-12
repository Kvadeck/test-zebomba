import noPhotoImg from '../../images/main/no-photo.png';

const USERS = 10;
const SCROLL_STEP = 60;

export default function Slider() {
  const menu = document.querySelector('.menu');
  menu.insertAdjacentHTML('beforeend', `<div class="slider"><button class="back-btn"></button><button class="addfriend-btn"><img alt="add user" src=${noPhotoImg}></button></div>`);

  (function sliderInner() {
    const slider = document.querySelector('.slider');
    slider.insertAdjacentHTML('beforeend', '<div class="slider-inner"><ul class="slider-list"></ul></div>');
    const sliderList = document.querySelector('.slider-list');

    const items = [];

    const noPhoto = `<img alt="no photo user" src=${noPhotoImg}>`;
    const empty = '<span class="empty"></span>';

    for (let i = USERS; i--;) {
      items.push(`<li class="slider-item">
            ${(i > 4) ? noPhoto : empty}
        </li>`);
    }
    sliderList.insertAdjacentHTML('beforeend', items.join(''));
  }());

  (function forwardBtn() {
    const slider = document.querySelector('.slider');
    slider.insertAdjacentHTML('beforeend', '<button class="forward-btn"></button>');
  }());

  function slideForward() {
    const sliderList = document.querySelector('.slider-list');
    sliderList.scrollLeft += SCROLL_STEP;
  }

  const forwardButton = document.querySelector('.forward-btn');
  forwardButton.addEventListener('click', slideForward, false);

  function slideBackward() {
    const sliderList = document.querySelector('.slider-list');
    sliderList.scrollLeft -= SCROLL_STEP;
  }

  const backButton = document.querySelector('.back-btn');
  backButton.addEventListener('click', slideBackward, false);
}
