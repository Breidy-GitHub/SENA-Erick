// Obtener elementos del DOM
const display = document.getElementById("result");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const operatorButtons = document.getElementsByClassName("operator");
const numberButtons = document.querySelectorAll(".keys button:not(.operator)");

// Variables
let firstNumber = null;
let operator = null;
let secondNumber = null;

// Funciones de operaciones
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Función para realizar la operación
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

// Función para actualizar la pantalla
function updateDisplay(value) {
  display.textContent = value;
}

// Event listener para los botones de número
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === null) {
      if (firstNumber === null) {
        firstNumber = button.value;
      } else {
        firstNumber += button.value;
      }
      updateDisplay(firstNumber);
    } else {
      if (secondNumber === null) {
        secondNumber = button.value;
      } else {
        secondNumber += button.value;
      }
      updateDisplay(secondNumber);
    }
  });
});

// Event listener para los botones de operador
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    if (firstNumber !== null) {
      operator = operatorButtons[i].value;
    }
  });
}

// Event listener para el botón de igual
equalButton.addEventListener("click", () => {
  if (operator !== null && secondNumber !== null) {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    updateDisplay(result);
    firstNumber = result;
    operator = null;
    secondNumber = null;
  }
});

// Event listener para el botón de limpiar
clearButton.addEventListener("click", () => {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  updateDisplay("0");
});
