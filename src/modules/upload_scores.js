import {baseUrl, games, id, scores} from './api.js';

const path = `${baseUrl}${games}${id}${scores}`
async function uploadScore(user,score) {
  fetch(path, {
  method: 'POST',
  body: JSON.stringify({
    name: 'Dream League'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
}

export default uploadScore;