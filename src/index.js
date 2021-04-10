import './styles/index.scss';
import Game from './js/modules/Game';
import Chip from './js/modules/Chip';
import Menu from './js/modules/Menu';
import Slider from './js/modules/Slider';
import Button from './js/modules/Button';

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
  } catch (err) {
    // eslint-disable-next-line no-alert
    console.log(err);
  }
}());
