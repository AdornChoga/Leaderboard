import {
  baseUrl, games, id, scores,
} from './api.js';

const path = `${baseUrl}${games}${id}${scores}`;

const recentScores = async () => {
  const data = await fetch(path);
  const response = await data.json();
  const result = response.result;
  return result;
}

export default recentScores;