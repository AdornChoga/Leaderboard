const loadScores = (htmlContainer, scores) => {
  scores().then((value) => {
    value.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${score.user}: ${score.score}`;
      htmlContainer.appendChild(listItem);
    });
  })
  
};

export default loadScores;