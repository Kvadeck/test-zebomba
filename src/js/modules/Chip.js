import steps from '../constants/steps';
import PlayerImg from '../../images/main/player.png';

export default function Chip() {
  let id = 0;

  const game = document.querySelector('.game');
  game.insertAdjacentHTML('beforeend', `<img class="chip" alt="chip" src=${PlayerImg}>`);

  function makeAstep() {
    if (id >= 10) {
      return;
    }
    const style = document.createElement('style');
    style.id = id;

    const animationStep = `\
      @keyframes frame${id} {\
        33% {\
          left: ${steps[id].dots[0].x}px;\
          top: ${steps[id].dots[0].y}px;\
        }\
        66% {\
          left: ${steps[id].dots[1].x}px;\
          top: ${steps[id].dots[1].y}px;\
        }\
        100% {\
          left: ${steps[id].dots[2].x}px;\
          top: ${steps[id].dots[2].y}px;\
        }\
      }`;
    style.innerHTML = animationStep;
    const chip = document.querySelector('.chip');
    chip.style.animation = `frame${id} 0.7s linear`;
    chip.appendChild(style);

    chip.addEventListener('animationend', () => {
      const styleCreate = document.getElementById(`${id}`);
      if (styleCreate) {
        const point = `left: ${steps[id].dots[2].x}px; top: ${steps[id].dots[2].y}px;`;
        chip.style = point;
        chip.style.removeProperty('animation');
        const newStyle = document.getElementById(`${id}`);
        newStyle.parentNode.removeChild(newStyle);
        id++;
      }
    });
  }

  const universityButton = document.querySelector('.university');
  universityButton.addEventListener('click', makeAstep, false);
}
