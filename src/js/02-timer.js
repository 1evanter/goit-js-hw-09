import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtnEl: document.querySelector('button[data-start]'),
    daysField: document.querySelector('span[data-days]'),
    hoursField: document.querySelector('span[data-hours]'),
    minutesField: document.querySelector('span[data-minutes]'),
    secondsField: document.querySelector('span[data-seconds]'),
}

let timerId = null;

 const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
     onClose(selectedDates) {
         if (selectedDates[0] <= new Date()) {
             refs.startBtnEl.disabled = true;
             console.log('pon')
           return Notiflix.Notify.failure('Please choose a date in the future')
         };
          refs.startBtnEl.disabled = false;
  },
};

const fp = flatpickr("#datetime-picker", options);

function timerStart() {
       timerId = setInterval(() => {
            const finishTime = fp.selectedDates[0].getTime();
            const currentTime = Date.now();
            deltaTime = finishTime - currentTime;
           if (deltaTime <= 0) {
               clearInterval(timerId);
               return;
           };
                
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
            
        updateClockface({days, hours, minutes, seconds});
       }, 1000)
  
}

refs.startBtnEl.addEventListener('click', timerStart);

function updateClockface({days, hours, minutes, seconds}) {
    refs.daysField.textContent = days;
    refs.hoursField.textContent = hours;
    refs.minutesField.textContent = minutes;
    refs.secondsField.textContent = seconds;
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return {days, hours, minutes, seconds};
};

