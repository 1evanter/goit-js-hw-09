const refs = {
    startBtnEl: document.querySelector('button[data-start]'),
    stopBtnEl: document.querySelector('button[data-stop]'),
};

let intervalId = null;
let isActive = false;

refs.startBtnEl.addEventListener('click', onStartBtn);
refs.stopBtnEl.addEventListener('click', onStopBtn);

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

