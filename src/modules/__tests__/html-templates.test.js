/**
* @jest-environment jsdom
*/

import { describe, expect, it } from '@jest/globals';
import { enterGamePopup } from '../html-templates.js';

describe('Tests for popup for entering first game', () => {
  const container = document.createElement('div');
  container.style.display = 'none';
  enterGamePopup(container);

  it('popup container display should be set to block', () => {
    expect(container.style.display).toBe('block');
  });

  it('popup div container should contain one form child element', () => {
    expect(container.childElementCount).toBe(1);
  });

  it('popup legend should contain a welcome text title', () => {
    const legend = container.querySelector('legend');
    expect(legend.textContent).toBe('Welcome to Leaderboard');
  });

  it('popup game input should contain placeholder text', () => {
    const gameInput = container.querySelector('input');
    expect(gameInput.placeholder).toBe('Enter a game');
  });
});
