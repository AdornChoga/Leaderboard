/**
* @jest-environment jsdom
*/

import { expect, it } from '@jest/globals';
import loadScores from '../load_scores.js';

describe('Tests for loading scores function', () => {
  const scoresContainer = document.createElement('ul');
  const recentScores = () => Promise.resolve([
    {
      user: 'John Doe',
      score: 42,
    },
    {
      user: 'Peter Parker',
      score: 35,
    },
    {
      user: 'Wonder Woman',
      score: 50,
    },
  ]);

  it('list container should contain three list items', async () => {
    await loadScores(scoresContainer, recentScores);
    expect(scoresContainer.childElementCount).not.toBe(2);
    expect(scoresContainer.childElementCount).toBe(3);
  });

  it('first list item should have John Doe: 42 textContent', async () => {
    await loadScores(scoresContainer, recentScores);
    const lastScoreItem = scoresContainer.children[0].textContent;
    expect(lastScoreItem).toBe('John Doe: 42');
  });

  it('last list item should have Wonder Woman: 50 textContent', async () => {
    await loadScores(scoresContainer, recentScores);
    const lastScoreItem = scoresContainer.children[2].textContent;
    expect(lastScoreItem).toBe('Wonder Woman: 50');
  });
});
