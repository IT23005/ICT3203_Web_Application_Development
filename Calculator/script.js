let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultShown = false;

function appendNumber(num) {
    if (resultShown) {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        resultShown = false;
    }

    if (operator === "") {
        firstNumber = firstNumber + num;
    } else {
        secondNumber = secondNumber + num;
    }
    updateDisplay(firstNumber + operator + secondNumber);
}

function setOperator(op) {
    if (firstNumber !== "") {
        operator = op;
        resultShown = false;
        updateDisplay(firstNumber + operator + secondNumber);
    }
}

function calculate() {
    if (operator === "") {
        return;
    }

    let result = 0;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
        updateDisplay("Error");
        return;
    }

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            updateDisplay("Error");
            return;
        }
        result = num1 / num2;
    }

    updateDisplay(result);

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    resultShown = true;
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    resultShown = false;
    updateDisplay(0);
}

function updateDisplay(value) {
    document.getElementById("display").innerText = value;
}
