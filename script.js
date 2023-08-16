// Get elements
const displayElement = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const decimalButton = document.getElementById('decimal');
const backspaceButton = document.getElementById('backspace');

let firstNumber = '';
let operator = '';
let secondNumber = '';

// Update display
function updateDisplay() {
  displayElement.textContent = firstNumber + operator + secondNumber;
}

// Number button click
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!operator) {
      firstNumber += button.textContent;
    } else {
      secondNumber += button.textContent;
    }
    updateDisplay();
  });
});

// Operator button click
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (firstNumber && !operator && !secondNumber) {
      operator = button.textContent;
      updateDisplay();
    }
  });
});

// Equals button click
equalsButton.addEventListener('click', () => {
  if (firstNumber && operator && secondNumber) {
    firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
    operator = '';
    secondNumber = '';
    updateDisplay();
  }
});

// Clear button click
clearButton.addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  updateDisplay();
});

// Decimal button click
decimalButton.addEventListener('click', () => {
  if (!operator && !firstNumber.includes('.')) {
    firstNumber += '.';
    updateDisplay();
  } else if (operator && !secondNumber.includes('.')) {
    secondNumber += '.';
    updateDisplay();
  }
});

// Backspace button click
backspaceButton.addEventListener('click', () => {
  if (!operator && firstNumber) {
    firstNumber = firstNumber.slice(0, -1);
  } else if (operator && secondNumber) {
    secondNumber = secondNumber.slice(0, -1);
  }
  updateDisplay();
});

// Basic math functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : 'Error'; }

// Operate function
function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Error';
  }
}
