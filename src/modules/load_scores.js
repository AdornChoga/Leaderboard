
export default function loadScores(htmlContainer, recentScores)  {
  recentScores.forEach((score) => {
    let listItem = document.createElement('li');
    listItem.textContent = `${score.name}: ${score.score}`
    htmlContainer.appendChild(listItem);
  })
}