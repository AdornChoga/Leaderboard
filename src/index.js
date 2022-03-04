import './index.css';
import { navigation, addScore, refreshScores } from './modules/events.js';
import { myGamesTemplate, enterGamePopup } from './modules/html-templates.js';
import currentGame from './modules/localstorage/current-game.js';
import { notifyEmptyScores, setHomeGame } from './modules/conditional_rendering.js';

const popupContainer = document.querySelector('.popups-container');

navigation();
addScore();
refreshScores();
myGamesTemplate();
notifyEmptyScores();

if (currentGame.fetchCurrentGame().gameId) {
  const refreshBtn = document.querySelector('#refresh-button');
  setHomeGame();
  refreshBtn.click();
} else {
  enterGamePopup(popupContainer);
}

if (localStorage.getItem('games') === null) {
  enterGamePopup(popupContainer);
}