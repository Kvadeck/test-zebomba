import './styles/index.scss';
import Game from './js/modules/Game';

// import Chip from './js/modules/Chip';
// import Menu from './js/modules/Menu';
// import Slider from './js/modules/Slider';
// import Button from './js/modules/Button';
// import Modal from './js/modules/Modal';

(function start() {
  try {
    new Game('#root').init()
  } catch (err) {
    console.log(err)
  }
}());
