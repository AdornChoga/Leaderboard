export default function loadScores(htmlContainer, recentScores) {
  recentScores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.name}: ${score.score}`;
    htmlContainer.appendChild(listItem);
  });
}