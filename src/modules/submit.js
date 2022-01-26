import uploadScore from "./upload_scores.js";

const submit = () => {
  let nameInput = document.querySelector('#name-input');
  let scoreInput = document.querySelector('#score-input');
  if(nameInput.value !== "" && scoreInput.value !== "") {
    uploadScore(nameInput.value, Number(scoreInput.value));
    nameInput.value = "";
    scoreInput.value = "";
  }
}

export default submit;

