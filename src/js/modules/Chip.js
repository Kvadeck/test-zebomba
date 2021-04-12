import points from '../constants/points';

export default function Chip() {
  let id = 0;
  const game = document.querySelector('.game');
  game.insertAdjacentHTML('beforeend', '<span class="chip"></span>');

  const chip = document.querySelector('.chip');

  function makeAstep() {
    if (id >= 10) {
      return;
    }
    chip.style.animation = `chip-step-${id} 0.7s linear`;
    chip.style.animationFillMode = 'forwards';
  }

  function savePoint() {
    const point = `left: ${points[id].x}px; top: ${points[id].y}px;`;
    chip.style = point;
    id++;
  }

  chip.addEventListener('animationend', savePoint);

  const universityButton = document.querySelector('.university');
  universityButton.addEventListener('click', makeAstep, false);
}
