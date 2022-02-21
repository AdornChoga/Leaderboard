class gamesData {
  static fetchGames() {
    if (localStorage.getItem('games') === null) {
      localStorage.setItem('games', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('games'));
  }

  static setGames(games) {
    localStorage.setItem('games', JSON.stringify(games));
  }

  static updateGames(game) {
    const games = this.fetchGames();
    games.push(game);
    localStorage.setItem('games', JSON.stringify(games));
  }
}

export default gamesData;