import gamesData from './localstorage/games-data.js';
import currentGame from './localstorage/current-game.js';
import createGame from './create_game.js';

const myGamesTemplate = () => {
  const myGamesContainer = document.querySelector('.my-games-container');
  myGamesContainer.innerHTML = `
    <h1>My Games</h1>
    <ul>
      <li>Game 1</li>
      <li>Game 2</li>
      <li>Game 3</li>
      <li>Game 4</li>
    </ul>
  `;
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