import apiPathInfo from './api.js';

const uploadScore = async (user, score) => {
  const {
    baseUrl, games, id, scores,
  } = apiPathInfo();
  const path = `${baseUrl}${games}${id}${scores}`;
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