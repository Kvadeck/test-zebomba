import './styles/index.scss';
import Game from './js/modules/Game';
import Chip from './js/modules/Chip';
import Menu from './js/modules/Menu';
import Slider from './js/modules/Slider';
import Button from './js/modules/Button';
import Modal from './js/modules/Modal';

(function main() {
  try {
    Game();
    Menu();
    Slider();
    Button('chat');
    Button('university');
    Button('email');
    Button('score');
    Chip();
    Modal();
  } catch (err) {
    // eslint-disable-next-line no-alert
    console.log(err);
  }
}());
