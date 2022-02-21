class currentGame {
  static fetchCurrentGame() {
    if (localStorage.getItem('current-game') === null) {
      localStorage.setItem('current-game', JSON.stringify({}));
    }
    return JSON.parse(localStorage.getItem('current-game'));
  }

  static setCurrentGame(id) {
    if (id) {
      const currentGame = this.fetchCurrentGame();
      currentGame.gameId = id;
      localStorage.setItem('current-game', JSON.stringify(currentGame));
    } else {
      localStorage.setItem('current-game', JSON.stringify({}));
    }
  }
}

export default currentGame;