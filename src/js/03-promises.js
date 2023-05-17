import Notiflix from 'notiflix';
//import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitPromise);

function onSubmitPromise(e) {
  e.preventDefault();

  const { delay, step, amount } = e.currentTarget.elements;

  if (amount.value > 0 || step.value > 0 || delay.value > 0) {
    for (let i = 0; i < amount.value; i++) {
      let position = i + 1;
      const delays = Number(delay.value) + step.value * i;

      createPromise(position, delays)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
        });
    }
  } else {
    Notiflix.Notify.failure(`❌ Write number > 0`);
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
