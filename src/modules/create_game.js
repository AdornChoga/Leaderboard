import apiPathInfo from './api.js';

const createGame = async (gameName) => {
  const { baseUrl, games } = apiPathInfo();
  const path = `${baseUrl}${games}`;
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(
      {
        name: gameName,
      },
    ),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const results = await response.json();
  const gameId = results.result.split(' ')[3];
  return { gameName, gameId };
};

export default createGame;