import gamesData from './localstorage/games-data.js';
import currentGame from './localstorage/current-game.js';
import recentScores from './recent_scores.js';
import loadScores from './load_scores.js';

const events = () => {
  const scoresContainer = document.querySelector('.scores-list');
  const home = document.querySelector('.home');
  const myGamesLink = document.querySelector('.my-games-link');
  const myGamesContainer = document.querySelector('.my-games-container');
  const mainTitle = document.querySelector('.main-title');
  const gridContainer = document.querySelector('.grid-container');
  const displayedGame = document.querySelector('.current-game');

  myGamesLink.addEventListener('click', () => {
    mainTitle.style.display = 'none';
    gridContainer.style.display = 'none';
    displayedGame.style.display = 'none';
    home.style.display = 'block';
    myGamesContainer.style.display = 'flex';
    myGamesLink.style.display = 'none';
  });

  home.addEventListener('click', () => {
    mainTitle.style.display = 'block';
    gridContainer.style.display = 'grid';
    displayedGame.style.display = 'block';
    home.style.display = 'none';
    myGamesContainer.style.display = 'none';
    myGamesLink.style.display = 'block';
  });

  if (gamesData.fetchGames().length > 0) {
    gamesData.fetchGames().forEach((game) => {
      if (game.gameId === currentGame.fetchCurrentGame().gameId) {
        displayedGame.innerHTML = game.gameName.toUpperCase();
      }
    });
  } else {
    displayedGame.innerHTML = '';
    scoresContainer.innerHTML = '';
  }

  if (gamesData.fetchGames().length === 1) {
    const game = gamesData.fetchGames()[0];
    currentGame.setCurrentGame(game.gameId);
    displayedGame.innerHTML = game.gameName;
    loadScores(scoresContainer, recentScores);
  }

  if (gamesData.fetchGames().length === 0) {
    currentGame.setCurrentGame(null);
  }
};

export default events;