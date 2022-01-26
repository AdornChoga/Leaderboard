import './index.css';

import recentScores from './modules/recent_scores.js';
import loadScores from './modules/load_scores.js';
import submit from './modules/submit.js';

const submitBtn = document.querySelector('#submit');
const scoresContainer = document.querySelector('.scores-list');

loadScores(scoresContainer, recentScores);

submitBtn.addEventListener('click', () => {
  submit()
});