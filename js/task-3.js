const nameInput = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

nameInput.addEventListener('input', e => {
  const inputVal = e.currentTarget.value;
  if (!inputVal.trim()) {
    userName.textContent = 'Anonymous';
    return;
  }
  userName.textContent = inputVal;
});
