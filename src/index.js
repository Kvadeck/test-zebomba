import './styles/index.scss';
import Game from './js/modules/Game';

(function start() {
  try {
    new Game('#root').init()
  } catch (err) {
    console.log(err)
  }
}());
