import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const Form = document.querySelector('.form');
const DelayV = document.querySelector('[name="delay"]');
const Step = document.querySelector('[name="step"]');
const Amount = document.querySelector('[name="amount"]');

Form.addEventListener('click', SubminPromise);

function SubminPromise(e) {
  e.preventDefault();

  const amountValue = Amount.valueAsNumber;
  const stepValue = Step.valueAsNumber;

  let delay = DelayV.valueAsNumber;

  for (let i = 0; i <= amountValue; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += stepValue;
  }
}

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
}
