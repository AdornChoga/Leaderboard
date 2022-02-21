import gamesData from './localstorage/games-data.js';
import currentGame from './localstorage/current-game.js';
import createGame from './create_game.js';
import recentScores from './recent_scores.js';
import loadScores from './load_scores.js';
import events from './events.js';

const myGamesTemplate = () => {
  const myGamesContainer = document.querySelector('.my-games-container');
  myGamesContainer.innerHTML = `
    <select class="game-menu">
    </select>
    <div class="my-games-section">
      <form class="new-game-form">
        <input type="text" placeholder="Add a new game..." id="input-new-game" value=""/>
        <button type="submit" id="submit-new-game">Add Game</button>
      </form>
    </div>
  `;
  const gameMenu = document.querySelector('.game-menu');
  gamesData.fetchGames().forEach((game) => {
    const gameOption = document.createElement('option');
    gameOption.classList.add('game-option');
    gameOption.id = game.gameId;
    gameOption.innerHTML = game.gameName;
    if (game.gameId === currentGame.fetchCurrentGame().gameId) {
      gameOption.selected = true;
    }
    gameMenu.appendChild(gameOption);
  });

  gameMenu.addEventListener('change', () => {
    const scoresContainer = document.querySelector('.scores-list');
    const selectedGame = gameMenu.options[gameMenu.selectedIndex];
    currentGame.setCurrentGame(selectedGame.id);
    scoresContainer.innerHTML = '';
    loadScores(scoresContainer, recentScores);
    events();
  });

  const myGamesSection = document.querySelector('.my-games-section');
  const gamesList = document.createElement('ul');
  gamesList.classList.add('games-list-container');
  gamesData.fetchGames().forEach((game) => {
    const listItem = document.createElement('li');
    listItem.classList.add('game-list-item');
    listItem.innerHTML = `
      <p>${game.gameName}</p>
      <button type="button" class="delete-game" id="${game.gameId}">delete</button>
    `;
    gamesList.appendChild(listItem);
  });
  myGamesSection.appendChild(gamesList);

  const newGameForm = document.querySelector('.new-game-form');
  const inputNewGame = document.querySelector('#input-new-game');
  newGameForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newGame = inputNewGame.value.trim();
    const { gameName, gameId } = await createGame(newGame);
    gamesData.updateGames({ gameName, gameId });
    const listItem = document.createElement('li');
    listItem.classList.add('game-list-item');
    listItem.innerHTML = `
      <p>${gameName}</p>
      <button type="button" class="delete-game" id="${gameId}">delete</button>
    `;
    myGamesTemplate();
    events();
    newGameForm.reset();
  });

  const deleteGame = document.querySelectorAll('.delete-game');
  deleteGame.forEach((btn) => {
    btn.addEventListener('click', () => {
      const games = gamesData.fetchGames();
      const remainingGames = games.filter((game) => game.gameId !== btn.id);
      gamesData.setGames(remainingGames);
      events();
      myGamesTemplate();
    });
  });
};

const enterGamePopup = () => {
  const popupContainer = document.querySelector('.popups-container');
  popupContainer.innerHTML = `
    <form class="enter-game-popup">
      <fieldset>
        <legend>Enter Game</legend>
        <input type="text" placeholder="Enter Game" id="game-input" value="" />
        <button type="submit" id="submit-game">OK</button>
      </fieldset>
    </form>
  `;
  popupContainer.style.display = 'block';
  const gameInputForm = document.querySelector('.enter-game-popup');
  gameInputForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const game = document.querySelector('#game-input');
    const { gameName, gameId } = await createGame(game.value);
    gamesData.updateGames({ gameName, gameId });
    currentGame.setCurrentGame(gameId);
    popupContainer.style.display = 'none';
    window.location.reload();
  });
};

export { myGamesTemplate, enterGamePopup };