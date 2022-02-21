import currentGame from './localstorage/current-game.js';

const apiPathInfo = () => {
  const currentGameId = currentGame.fetchCurrentGame().gameId;
  const api = {
    baseUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
    games: 'games/',
    id: `${currentGameId}/`,
    scores: 'scores/',
  };
  return api;
};

export default apiPathInfo;