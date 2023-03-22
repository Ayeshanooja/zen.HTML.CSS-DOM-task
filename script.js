let screen = document.getElementById('screen');

function addToScreen(value) {
  screen.innerHTML += value;
}

function clearScreen() {
  screen.innerHTML = '';
}

function calculate() {
  let result = eval(screen.innerHTML);
  screen.innerHTML = result;
}