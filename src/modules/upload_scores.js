import {baseUrl, games, id, scores} from './api.js';

const path = `${baseUrl}${games}${id}${scores}`
async function uploadScore(user, score) {
  fetch(path, {
  method: 'POST',
  body: JSON.stringify({
    user: user,
    score: score
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
}).then((response) => response.json()).
then((json => console.log(json)))
}

export default uploadScore;