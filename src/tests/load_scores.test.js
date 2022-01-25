/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import scoresTemplate from './scores_template.js';
import loadScores from '../modules/load_scores.js';

describe('Loading of scores', () => {
  it('Are scores loaded', () => {
    document.body.innerHTML = scoresTemplate;
    const container = document.querySelector('.scores-list');
    const scores = [
      { name: 'Name', score: 100 }, { name: 'Name', score: 20 },
      { name: 'Name', score: 20 }, { name: 'Name', score: 78 },
      { name: 'Name', score: 125 }, { name: 'Name', score: 77 },
      { name: 'Name', score: 42 },
    ];
    loadScores(container, scores);
    const numScores = container.childElementCount;
    expect(numScores).toBe(7);
  });
});