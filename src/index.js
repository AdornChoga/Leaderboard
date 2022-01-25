import './index.css';
import SCORES from './modules/recent_scores.js';
import loadScores from './modules/load_scores.js';

const scoresContainer = document.querySelector('.scores-list');
loadScores(scoresContainer, SCORES);