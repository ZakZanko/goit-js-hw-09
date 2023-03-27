function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let id = null;

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

const BackColorSwitcher = function () {
  body.style.color = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
};

startButton.addEventListener('click', () => {
  id = setInterval(BackColorSwitcher, 1000);
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(id);
  startButton.disabled = false;
});
