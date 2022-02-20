const events = () => {
  const home = document.querySelector('.home');
  const currentGame = document.querySelector('.current-game');
  const myGamesLink = document.querySelector('.my-games-link');
  const myGamesContainer = document.querySelector('.my-games-container');
  const mainTitle = document.querySelector('.main-title');
  const gridContainer = document.querySelector('.grid-container');

  myGamesLink.addEventListener('click', () => {
    mainTitle.style.display = 'none';
    gridContainer.style.display = 'none';
    currentGame.style.display = 'none';
    home.style.display = 'block';
    myGamesContainer.style.display = 'block';
  });

  home.addEventListener('click', () => {
    mainTitle.style.display = 'block';
    gridContainer.style.display = 'grid';
    currentGame.style.display = 'block';
    home.style.display = 'none';
    myGamesContainer.style.display = 'none';
  });
};

export default events;