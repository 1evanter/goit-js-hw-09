const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
let intervalId = null;
let isActive = false;

startBtnEl.addEventListener('click', onStartBtn);
stopBtnEl.addEventListener('click', onStopBtn);

function onStartBtn() {
    if (isActive) {
        return;
    };
    
    isActive = true;
   intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
};

function onStopBtn() {
    clearInterval(intervalId);
    isActive = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

