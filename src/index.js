import './index.css';
import events from './modules/events.js';
import { myGamesTemplate, enterGamePopup } from './modules/html-templates.js';
import currentGame from './modules/localstorage/current-game.js';
import recentScores from './modules/recent_scores.js';
import loadScores from './modules/load_scores.js';
import submit from './modules/submit.js';

const submitBtn = document.querySelector('#submit-score');
const refreshBtn = document.querySelector('#refresh-button');
const scoresContainer = document.querySelector('.scores-list');

events();

myGamesTemplate();

if (currentGame.fetchCurrentGame().gameId) {
  loadScores(scoresContainer, recentScores);
} else {
  enterGamePopup();
}

window.addEventListener('load', () => {
  if (localStorage.getItem('games') === null) {
    enterGamePopup();
  }
});

submitBtn.addEventListener('click', () => {
  submit();
});

refreshBtn.addEventListener('click', () => {
  scoresContainer.innerHTML = '';
  loadScores(scoresContainer, recentScores);
});