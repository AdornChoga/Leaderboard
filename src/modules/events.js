import gamesData from './localstorage/games-data.js';
import currentGame from './localstorage/current-game.js';
import { createGame } from './create_games.js';
import recentScores from './recent_scores.js';
import loadScores from './load_scores.js';
import postScore from './post_score.js';
import { notifyEmptyScores, setHomeGame } from './conditional_rendering.js';
import {
  addNewGameSpinner, initialGameSpinner, scoreRefreshSpinner, scoreUploadSpinner,
} from './spinners.js';

const submitInitialGame = async (htmlElements, container) => {
  const { form, gameInput } = htmlElements;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (gameInput.value !== '') {
      let game = gameInput.value;
      game = game.charAt(0).toUpperCase() + game.slice(1);
      initialGameSpinner('start');
      const { gameName, gameId } = await createGame(game);
      gamesData.updateGames({ gameName, gameId });
      currentGame.setCurrentGame(gameId);
      container.style.display = 'none';
      window.location.reload();
    }
  });
};

const addScore = () => {
  const addScoreForm = document.querySelector('.add-score-form');
  const addGameWarning = document.querySelector('.add-game-first');

  addScoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name-input');
    const scoreInput = document.querySelector('#score-input');
    if (nameInput.value !== '' && scoreInput.value !== '') {
      if (gamesData.fetchGames().length === 0) {
        addGameWarning.style.display = 'inline';
        setTimeout(() => {
          addGameWarning.style.display = 'none';
        }, 1500);
      } else {
        scoreUploadSpinner('start');
        postScore(nameInput.value, Number(scoreInput.value));
      }
      nameInput.value = '';
      scoreInput.value = '';
    }
  });
};

const refreshScores = () => {
  const refreshBtn = document.querySelector('#refresh-button');
  const scoresContainer = document.querySelector('.scores-list');

  refreshBtn.addEventListener('click', async () => {
    if (currentGame.fetchCurrentGame().gameId) {
      scoreRefreshSpinner('start');
      scoresContainer.innerHTML = '';
      await loadScores(scoresContainer, recentScores);
      scoreRefreshSpinner('stop');
    }
  });
};

const addGame = (htmlElements, rerender) => {
  const [form, gameInput] = htmlElements;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let newGame = gameInput.value.trim();
    if (newGame !== '') {
      newGame = newGame.charAt(0).toUpperCase() + newGame.slice(1);
      addNewGameSpinner('start');
      const { gameName, gameId } = await createGame(newGame);
      gamesData.updateGames({ gameName, gameId });
      rerender();
      setHomeGame();
      form.reset();
    }
  });
};

const selectCurrentGame = (menu) => {
  menu.addEventListener('change', () => {
    const scoresContainer = document.querySelector('.scores-list');
    const selectedGame = menu.options[menu.selectedIndex];
    currentGame.setCurrentGame(selectedGame.id);
    scoresContainer.innerHTML = '';
    loadScores(scoresContainer, recentScores);
    setHomeGame();
  });
};

const deleteGame = (deleteBtns, rerender) => {
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const games = gamesData.fetchGames();
      const remainingGames = games.filter((game) => game.gameId !== btn.id);
      gamesData.setGames(remainingGames);
      setHomeGame();
      rerender();
    });
  });
};

const navigation = () => {
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

  home.addEventListener('click', async () => {
    mainTitle.style.display = 'block';
    gridContainer.style.display = window.innerWidth > 700 ? 'grid' : 'flex';
    displayedGame.style.display = 'block';
    home.style.display = 'none';
    myGamesContainer.style.display = 'none';
    myGamesLink.style.display = 'block';
    await notifyEmptyScores();
  });
};

export {
  submitInitialGame,
  deleteGame, addGame, selectCurrentGame,
  navigation, addScore, refreshScores,
};