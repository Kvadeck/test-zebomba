import main from '../constants/index';
import score from '../constants/raiting';

export default function Modal() {
  const game = document.querySelector('.game');

  game.insertAdjacentHTML('beforeend', '<div class="modal"><div class="modal-body"></div><div class="overlay"></div></div>');

  const modalBody = document.querySelector('.modal-body');
  modalBody.insertAdjacentHTML('beforeend', `<span class="modal-header">${main.modal.header}</span>`);

  modalBody.insertAdjacentHTML('beforeend', '<div class="modal-inner"></div>');

  const modalIn = document.querySelector('.modal-inner');
  modalIn.insertAdjacentHTML('beforeend', `<div class="modal-score"><div class="score-header"><span class="place">${main.modal.score.header.place}</span><span></span><span>${main.modal.score.header.lastName}</span><span class="exp">${main.modal.score.header.exp}</span></div></div>`);

  const modalScore = document.querySelector('.modal-score');
  modalScore.insertAdjacentHTML('beforeend', '<div class="score-list"></div>');
  const scoreList = document.querySelector('.score-list');

  (function scoreItem() {
    const friends = [];

    const rating = score.rating.sort((a, b) => b.points - a.points).slice(0, 7);
    const isFriend = (arr, el) => arr.filter((e) => e.id === el.id).length > 0;

    rating.forEach((el, i) => {
      friends.push(`<div class="score-item"><span class="score-place">${i + 1}</span><span class="is-friend">${(isFriend(score.friends, el)) ? 'Твой друг' : ''}</span><span class="score-lastname ${(isFriend(score.friends, el)) ? 'friend' : ''}">${el.name}&ensp;${el.lastName}</span><span class="score-exp">${el.points}</span></div>`);
    });
    scoreList.insertAdjacentHTML('beforeend', friends.join(''));
  }());

  modalBody.insertAdjacentHTML('beforeend', '<button class="modal-close-btn"></button>');

  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
  }

  const closeBtn = document.querySelector('.modal-close-btn');
  closeBtn.addEventListener('click', closeModal, false);

  function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
  }
  const scoreBtn = document.querySelector('.score');
  scoreBtn.addEventListener('click', openModal, false);
}
