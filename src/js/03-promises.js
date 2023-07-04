import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  delayField: document.querySelector('input[name="delay"]'),
  stepField: document.querySelector('input[name="step"]'),
  amountField: document.querySelector('input[name="amount"]'),
};

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  let promiseFirstDelay = Number(refs.delayField.value);
  let promiseNextStep = Number(refs.stepField.value);
  let promiseAmount = Number(refs.amountField.value);

  for (let i = 1; i <= promiseAmount; i += 1) {
    createPromise(i, promiseFirstDelay)
    .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

    promiseFirstDelay += promiseNextStep;
  };

  refs.formEl.reset();
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};