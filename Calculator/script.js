let firstNumber = "";
let secondNumber = "";
let operator = "";

function appendNumber(num) {
    if (operator === "") {
        firstNumber = firstNumber + num;
        updateDisplay(firstNumber);
    } else {
        secondNumber = secondNumber + num;
        updateDisplay(secondNumber);
    }
}

function setOperator(op) {
    if (firstNumber !== "") {
        operator = op;
    }
}

function calculate() {
    let result = 0;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
        updateDisplay("");
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
            updateDisplay("0");
            return;
        }
        result = num1 / num2;
    }

    updateDisplay(result);

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    updateDisplay(0);
}

function updateDisplay(value) {
    document.getElementById("display").innerText = value;
}