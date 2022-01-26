const loadScores = async (htmlContainer, scores) => {
  const data = await scores();
  data.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    htmlContainer.appendChild(listItem);
  })
};

export default loadScores;