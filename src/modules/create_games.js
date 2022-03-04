import apiPathInfo from './api.js';

const createGame = async (gameName) => {
  const { baseUrl, games } = apiPathInfo();
  const path = `${baseUrl}${games}`;
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(
      {
        name: gameName,
      },
    ),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const results = await response.json();
  const gameId = results.result.split(' ')[3];
  return { gameName, gameId };
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

export { createGame, createGamesMenu, createGamesList };