function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesList.append(box);
  }
}

function destroyBoxes() {
  boxesList.innerHTML = '';
}

function onButtonClick(e) {
  const inputVal = Number(input.value);
  input.value = '';

  if (e.currentTarget.dataset.create !== undefined) createBoxes(inputVal);
  else destroyBoxes();
}

const boxesList = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', onButtonClick);
destroyBtn.addEventListener('click', onButtonClick);
