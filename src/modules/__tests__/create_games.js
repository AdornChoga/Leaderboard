/**
* @jest-environment jsdom
*/

import { describe, expect } from '@jest/globals';
import { createGamesMenu, createGamesList } from '../create_games.js';

describe('Tests for creation of game menu', () => {
  const games = [{ gameName: 'game1', gameId: 1 }, { gameName: 'game2', gameId: 2 }];
  const container = document.createElement('select');
  const current = { gameId: 2 };
  createGamesMenu(games, current, container);

  it('dropdown menu should contain two elements', () => {
    expect(container.childElementCount).toBe(2);
  });

  it('options textContent should match gameName values in games', () => {
    const options = container.children;
    for (let i = 0; i < options.length; i += 1) {
      expect(options[i].textContent).toBe(games[i].gameName);
    }
  });

  it('selected attribute should be on current game', () => {
    const options = container.children;
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].selected === true) {
        expect(options[i].textContent).toBe(games[current.gameId - 1].gameName);
      }
    }
  });
});

describe('Tests for creating games list', () => {
  const games = [
    { gameName: 'game1', gameId: 1 },
    { gameName: 'game2', gameId: 2 },
    { gameName: 'game3', gameId: 3 },
  ];
  const container = document.createElement('ul');
  createGamesList(games, container);

  it('games list should contain three elements', () => {
    expect(container.childElementCount).toBe(3);
  });

  it('delete buttons id should match match gameId in games array', () => {
    const deleteButtons = container.querySelectorAll('.delete-game');
    for (let i = 0; i < deleteButtons.length; i += 1) {
      expect(+deleteButtons[i].id).toBe(games[i].gameId);
    }
  });

  it('each game list item should contain game name and delete button', () => {
    const listItems = container.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i += 1) {
      expect(listItems[i].childElementCount).toBe(2);
      expect(listItems[i].children[0].textContent).toBe(games[i].gameName);
      expect(listItems[i].children[1].textContent).toBe('delete');
    }
  });
});
