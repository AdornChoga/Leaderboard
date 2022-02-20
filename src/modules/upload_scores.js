import {
  baseUrl, games, id, scores,
} from './api.js';

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
};

export default uploadScore;