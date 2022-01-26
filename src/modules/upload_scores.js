import {
  baseUrl, games, id, scores,
} from './api.js';
import recentScores from './recent_scores.js';
import loadScores from './load_scores.js';

const scoresContainer = document.querySelector('.scores-list');
const path = `${baseUrl}${games}${id}${scores}`;
async function uploadScore(user, score) {
  fetch(path, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
    .then(() => {
      scoresContainer.innerHTML = '';
      loadScores(scoresContainer, recentScores);
    });
}

export default uploadScore;