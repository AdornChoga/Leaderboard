import { scoreRefreshSpinnner } from './spinners.js';

const loadScores = async (htmlContainer, scores) => {
  const data = await scores();
  data.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    htmlContainer.appendChild(listItem);
  });
  scoreRefreshSpinnner('stop');
};

export default loadScores;