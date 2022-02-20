import currentGame from './localstorage/current-game.js';

const api = {
  baseUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
  games: 'games/',
  id: `${currentGame.fetchCurrentGame().gameId}/`,
  scores: 'scores/',
};

const {
  baseUrl, games, id, scores,
} = api;

export {
  baseUrl, games, id, scores,
};