import currentGame from './localstorage/current-game.js';

const apiPathInfo = () => {
  const api = {
    baseUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
    games: 'games/',
    id: `${currentGame.fetchCurrentGame().gameId}/`,
    scores: 'scores/',
  };
  return api;
};

export default apiPathInfo;