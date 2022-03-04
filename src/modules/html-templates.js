import gamesData from './localstorage/games-data.js';
import currentGame from './localstorage/current-game.js';
import * as events from './events.js';

const myGamesTemplate = () => {
  const myGamesContainer = document.querySelector('.my-games-container');
  myGamesContainer.innerHTML = `
    <div class="game-menu-container">
      <h1 id="select-game">Current Game:</h1>
      <select class="game-menu"></select>
    </div>
    <div class="my-games-section">
      <form class="new-game-form">
        <input type="text" placeholder="Add a new game..." id="input-new-game" value="" required/>
        <button type="submit" id="submit-new-game">Add Game</button>
      </form>
    </div>
  `;
  const gameMenu = document.querySelector('.game-menu');
  events.createGamesMenu(gamesData.fetchGames(), currentGame.fetchCurrentGame(), gameMenu);
  events.selectCurrentGame(gameMenu);

  const myGamesSection = document.querySelector('.my-games-section');
  const gamesList = document.createElement('ul');
  gamesList.classList.add('games-list-container');
  events.createGamesList(gamesData.fetchGames(), gamesList);
  myGamesSection.appendChild(gamesList);

  myGamesSection.innerHTML += `
    <h1 class="games-list-title">Games</h1>
  `;

  const newGameForm = document.querySelector('.new-game-form');
  const inputNewGame = document.querySelector('#input-new-game');
  events.addGame([newGameForm, inputNewGame], myGamesTemplate);

  const deleteButtons = document.querySelectorAll('.delete-game');
  events.deleteGame(deleteButtons, myGamesTemplate);
};

const enterGamePopup = (container) => {
  container.innerHTML = `
    <form class="enter-game-popup">
      <fieldset>
        <legend>Welcome to Leaderboard</legend>
        <br />
        <div>
          <input type="text" placeholder="Enter a game" id="game-input" value="" required/>
          <br />
          <button type="submit" id="submit-game">OK</button>
        </div>
      </fieldset>
    </form>
  `;
  container.style.display = 'block';
  const gameInputForm = container.querySelector('.enter-game-popup');
  const game = container.querySelector('#game-input');
  const elements = { form: gameInputForm, gameInput: game };
  events.submitInitialGame(elements, container);
};

export { myGamesTemplate, enterGamePopup };