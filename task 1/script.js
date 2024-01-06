const display = document.getElementById("display");

function insert(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

function clearAll() {
  display.value = "";
}

function clearLast() {
  let currentValue = display.value;
  let newValue = currentValue.slice(0, -1);
  display.value = newValue;
}
