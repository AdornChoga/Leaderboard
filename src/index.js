import './index.css';
import { navigation, setHomeGame, addScore } from './modules/events.js';
import { myGamesTemplate, enterGamePopup } from './modules/html-templates.js';
import currentGame from './modules/localstorage/current-game.js';
import recentScores from './modules/recent_scores.js';
import loadScores from './modules/load_scores.js';

const popupContainer = document.querySelector('.popups-container');

navigation();

setHomeGame();

addScore();

myGamesTemplate();

if (currentGame.fetchCurrentGame().gameId) {
  const scoresContainer = document.querySelector('.scores-list');
  loadScores(scoresContainer, recentScores);
} else {
  enterGamePopup(popupContainer);
}

window.addEventListener('load', () => {
  if (localStorage.getItem('games') === null) {
    enterGamePopup(popupContainer);
  }
});