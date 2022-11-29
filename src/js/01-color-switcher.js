const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let colorChange = null;
btnStop.setAttribute('disabled',"");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  colorChange = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');
});

btnStop.addEventListener('click', () => {
    clearInterval(colorChange);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', '');
});

/*
W HTML znajdują się przyciski «Start» i «Stop».

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

Napisz skrypt, który po kliknięciu przycisku «Start», raz na sekundę zmienia kolor tła <body> na wartość losową używając stylu inline. Po kliknięciu przycisku «Stop», kolor tła powinien przestać się zmieniać.
  */
