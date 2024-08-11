let currentInput = '';
let operator = null;
let previousInput = '';
let displayOperator = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === '' && previousInput !== '') {
        operator = op;
        displayOperator = op;
        updateDisplay();
        return;
    }
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    displayOperator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    let computation;
    try {
        computation = eval(previousInput + operator + currentInput);
    } catch {
        computation = "Error";
    }
    currentInput = computation.toString();
    operator = null;
    displayOperator = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    displayOperator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = previousInput + displayOperator + currentInput;
}
