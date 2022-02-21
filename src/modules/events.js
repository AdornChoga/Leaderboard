import gamesData from './localstorage/games-data.js';
import currentGame from './localstorage/current-game.js';
import createGame from './create_game.js';
import recentScores from './recent_scores.js';
import loadScores from './load_scores.js';
import postScore from './post_score.js';

const submitInitialGame = (htmlElements, container) => {
  const { form, gameInput } = htmlElements;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (gameInput.value !== '') {
      const { gameName, gameId } = await createGame(gameInput.value);
      gamesData.updateGames({ gameName, gameId });
      currentGame.setCurrentGame(gameId);
      container.style.display = 'none';
      window.location.reload();
    }
  });
};

const addScore = () => {
  const addScoreForm = document.querySelector('.add-score-form');
  const refreshBtn = document.querySelector('#refresh-button');
  const scoresContainer = document.querySelector('.scores-list');

  addScoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name-input');
    const scoreInput = document.querySelector('#score-input');
    if (nameInput.value !== '' && scoreInput.value !== '') {
      postScore(nameInput.value, Number(scoreInput.value));
      nameInput.value = '';
      scoreInput.value = '';
    }
  });

  refreshBtn.addEventListener('click', () => {
    if (currentGame.fetchCurrentGame().gameId) {
      scoresContainer.innerHTML = '';
      loadScores(scoresContainer, recentScores);
    }
  });
};

const createGamesMenu = (games, current, container) => {
  games.forEach((game) => {
    const gameOption = document.createElement('option');
    gameOption.classList.add('game-option');
    gameOption.id = game.gameId;
    gameOption.innerHTML = game.gameName;
    if (game.gameId === current.gameId) {
      gameOption.selected = true;
    }
    container.appendChild(gameOption);
  });
};

const createGamesList = (games, container) => {
  games.forEach((game) => {
    const listItem = document.createElement('li');
    listItem.classList.add('game-list-item');
    listItem.innerHTML = `
      <p>${game.gameName}</p>
      <button type="button" class="delete-game" id="${game.gameId}">delete</button>
    `;
    container.appendChild(listItem);
  });
};

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
    displayedGame.innerHTML = game.gameName;
    loadScores(scoresContainer, recentScores);
  }

  if (gamesData.fetchGames().length === 0) {
    currentGame.setCurrentGame(null);
  }
};

const addGame = (htmlElements, rerender) => {
  const [form, gameInput] = htmlElements;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newGame = gameInput.value.trim();
    const { gameName, gameId } = await createGame(newGame);
    gamesData.updateGames({ gameName, gameId });
    rerender();
    setHomeGame();
    form.reset();
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

  home.addEventListener('click', () => {
    mainTitle.style.display = 'block';
    gridContainer.style.display = 'grid';
    displayedGame.style.display = 'block';
    home.style.display = 'none';
    myGamesContainer.style.display = 'none';
    myGamesLink.style.display = 'block';
  });
};

export {
  submitInitialGame,
  deleteGame, addGame, createGamesList,
  createGamesMenu, selectCurrentGame, navigation,
  setHomeGame, addScore,
};