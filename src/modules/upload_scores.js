import {
  baseUrl, games, id, scores,
} from './api.js';
import recentScores from './recent_scores.js';
import loadScores from './load_scores.js';

const scoresContainer = document.querySelector('.scores-list');
const path = `${baseUrl}${games}${id}${scores}`;

const uploadScore = async (user, score) => {
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await response.json();
  scoresContainer.innerHTML = '';
  loadScores(scoresContainer, recentScores);
}

export default uploadScore;