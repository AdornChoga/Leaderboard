const initialGameSpinnner = (action) => {
  const submitFirstGameBtn = document.querySelector('#submit-game');
  if (action === 'start') {
    submitFirstGameBtn.innerHTML = `
      <span class="new-game-spinner spinner-border spinner-border-sm text-success" role="status" aria-hidden="true">
      </span>
  `;
  } else if (action === 'stop') {
    submitFirstGameBtn.innerHTML = 'OK';
  }
};

const scoreUploadSpinnner = (action) => {
  const submitBtn = document.querySelector('#submit-score');
  const refreshBtn = document.querySelector('#refresh-button');
  if (action === 'start') {
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-md text-white" role="status" aria-hidden="true">
      </span>
  `;
  } else if (action === 'stop') {
    submitBtn.innerHTML = `
      <span class="submission-msg">Submited</span>
    `;
    setTimeout(() => {
      submitBtn.innerHTML = 'Submit';
      refreshBtn.click();
    }, 800);
  }
};

const scoreRefreshSpinnner = (action) => {
  const refreshBtn = document.querySelector('#refresh-button');
  if (action === 'start') {
    refreshBtn.innerHTML = `
      <span class="spinner-border spinner-border-md text-white" role="status" aria-hidden="true">
      </span>
  `;
  } else if (action === 'stop') {
    refreshBtn.innerHTML = 'Refresh';
  }
};

const addNewGameSpinnner = (action) => {
  const addNewGameBtn = document.querySelector('#submit-new-game');
  if (action === 'start') {
    addNewGameBtn.innerHTML = `
      <span class="new-game-spinner spinner-border spinner-border-sm text-dark" role="status" aria-hidden="true">
      </span>
  `;
  } else if (action === 'stop') {
    addNewGameBtn.innerHTML = 'Add Game';
  }
};

export {
  scoreUploadSpinnner, scoreRefreshSpinnner, addNewGameSpinnner, initialGameSpinnner,
};