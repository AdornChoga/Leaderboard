import {baseUrl, games, id, scores} from './api.js';

const path = `${baseUrl}${games}${id}${scores}`

async function recentScores() {
  const data = fetch(path).then(response => response.json()).
  then((json) => json.result);
  return await data;
}


export default recentScores;