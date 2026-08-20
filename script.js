const action = document.querySelector('#action');
const status = document.querySelector('#status');
action.addEventListener('click', () => {
  status.textContent = 'Starter action completed. Extend this project with your own features.';
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => { status.textContent = ''; });
