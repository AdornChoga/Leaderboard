import './index.css';
import uploadScore from "./modules/upload_scores.js";

import recentScores from './modules/recent_scores.js';
import loadScores from './modules/load_scores.js';

const scoresContainer = document.querySelector('.scores-list');

loadScores(scoresContainer, recentScores);

