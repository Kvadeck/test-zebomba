import noPhotoImg from '../../images/main/no-photo.png';

const USERS = 10;
const SCROLL_STEP = 60;

export default function Slider() {
  const menu = document.querySelector('.menu');
  menu.insertAdjacentHTML('beforeend', '<div class="slider"></div>');

  (function backBtn() {
    const slider = document.querySelector('.slider');
    slider.insertAdjacentHTML('beforeend', '<span class="back-button"></span>');
  }());

  (function addFriendBtn() {
    const slider = document.querySelector('.slider');
    slider.insertAdjacentHTML('beforeend', '<span class="addfriend-button"></span>');

    const addfriend = document.querySelector('.addfriend-button');
    addfriend.insertAdjacentHTML('beforeend', `<img alt="add user" src=${noPhotoImg}>`);
  }());

  (function sliderInner() {
    const slider = document.querySelector('.slider');
    slider.insertAdjacentHTML('beforeend', '<div class="slider-inner"></div>');

    const sliderInnerEl = document.querySelector('.slider-inner');
    sliderInnerEl.insertAdjacentHTML('beforeend', '<ul class="slider-list"></ul>');

    const sliderList = document.querySelector('.slider-list');

    const items = [];

    const noPhoto = `<img alt="no photo user" src=${noPhotoImg}>`;
    const empty = '<span></span>';

    for (let i = USERS; i--;) {
      items.push(`<li class="slider-item">
            ${(i > 4) ? noPhoto : empty}
        </li>`);
    }
    sliderList.insertAdjacentHTML('beforeend', items.join(''));
  }());

  (function forwardBtn() {
    const slider = document.querySelector('.slider');
    slider.insertAdjacentHTML('beforeend', '<span class="forward-button"></span>');
  }());

  function slideForward() {
    const sliderList = document.querySelector('.slider-list');
    sliderList.scrollLeft += SCROLL_STEP;
  }

  const forwardButton = document.querySelector('.forward-button');
  forwardButton.addEventListener('click', slideForward, false);

  function slideBackward() {
    const sliderList = document.querySelector('.slider-list');
    sliderList.scrollLeft -= SCROLL_STEP;
  }

  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', slideBackward, false);
}
