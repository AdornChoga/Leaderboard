import './index.css';
import {
  navigation, setHomeGame, addScore, refreshScores,
} from './modules/events.js';
import { myGamesTemplate, enterGamePopup } from './modules/html-templates.js';
import currentGame from './modules/localstorage/current-game.js';

const popupContainer = document.querySelector('.popups-container');

navigation();
addScore();
refreshScores();
myGamesTemplate();

if (currentGame.fetchCurrentGame().gameId) {
  const refreshBtn = document.querySelector('#refresh-button');
  setHomeGame();
  refreshBtn.click();
} else {
  enterGamePopup(popupContainer);
}

window.addEventListener('load', () => {
  if (localStorage.getItem('games') === null) {
    enterGamePopup(popupContainer);
  }
});