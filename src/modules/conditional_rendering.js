import gamesData from './localstorage/games-data.js';
import currentGame from './localstorage/current-game.js';
import recentScores from './recent_scores.js';

const setHomeGame = () => {
  const displayedGame = document.querySelector('.current-game');
  const scoresContainer = document.querySelector('.scores-list');

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
    displayedGame.innerHTML = game.gameName.toUpperCase();
  }

  if (gamesData.fetchGames().length === 0) {
    currentGame.setCurrentGame(null);
  }
};

const notifyEmptyScores = async () => {
  const scoresContainer = document.querySelector('.scores-list');
  if ((await recentScores()).length === 0) {
    scoresContainer.innerHTML = `
      <h1 class="no-scores-msg">No scores uploaded yet</h1>
    `;
  }
};

const notifyEmptyGames = (notification) => {
  if (gamesData.fetchGames().length === 0) {
    notification.style.display = 'block';
  }
};

export { setHomeGame, notifyEmptyScores, notifyEmptyGames };