import apiPathInfo from './api.js';

const recentScores = async () => {
  const {
    baseUrl, games, id, scores,
  } = apiPathInfo();
  const path = `${baseUrl}${games}${id}${scores}`;
  const data = await fetch(path);
  const response = await data.json();
  const { result } = response;
  return result;
};

export default recentScores;