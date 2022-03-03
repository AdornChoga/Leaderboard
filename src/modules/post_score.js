import apiPathInfo from './api.js';
import { scoreUploadSpinnner } from './spinners.js';

const postScore = async (user, score) => {
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
  scoreUploadSpinnner('stop');
};

export default postScore;