import Notiflix from 'notiflix';

const formData = document.querySelector('form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

formData.addEventListener('submit', event => {
  event.preventDefault();

  let delay = parseInt(firstDelay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);

        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delay = delay + parseInt(delayStep.value);
  }
});
// firstDelay.addEventListener('input', event => {
//   console.log(event.target.value);
// });
/*
W HTML znajduje się znacznik formularza, w którego pola użytkownik będzie wprowadzał pierwsze opóźnienie w milisekundach, stopień zwiększenia opóźnienia dla każdej kolejnej obietnicy i liczbę obietnic, które należy utworzyć.

<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>

Napisz skrypt, który po wysłaniu formularza wywoła funkcję createPromise(position, delay) tyle razy, ile wprowadzono w pole amount. Po każdym wywołaniu przekaż jej numer utworzonej obietnicy (position) i opóźnienie, uwzględniając wprowadzone przez użytkownika pierwsze opóźnienie (delay) i stopień (step).

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

Uzupełnij kod funkcji createPromise tak, aby przywracała jedną obietnicę, którą realizuje się lub odkłada poprzez delay czasu. Wartością obietnicy powinien być obiekt, w którym będą właściwości position i delay z wartościami parametrów o tej samej nazwie. Użyj kodu początkowego funkcji, aby wybrać to, co należy zrobić z obietnicą - zrealizować lub odłożyć.

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
*/
