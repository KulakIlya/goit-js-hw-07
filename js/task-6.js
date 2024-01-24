function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  const boxes = [];
  for (let i = 0; i <= amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesList.append(...boxes);
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

function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
  return undefined;
}

console.log(multiply(2, 3, 5));
