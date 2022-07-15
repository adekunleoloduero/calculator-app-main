window.onload = () => {
    focusOnScreen();
    getInput(storeInOperands, storeInCurrentOperator, storeInOutput);
};


const firstOperand = [], currentOperator = [], secondOperand = [], equalTo = [], output = [];

const allDisplaybleInputs = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0,
    "dot": ".",
    "addition": " + ",
    "subtraction": " - ",
    "multiplication": " x ",
    "division": " / ",
    "equal-to": " = "
}

const operands = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0,
    "dot": ".",
}

const operators = {
    "addition": " + ",
    "subtraction": " - ",
    "multiplication": " x ",
    "division": " / ",
}



function focusOnScreen() {
    const screen = document.querySelector('#screen');
    screen.focus();
}

function getInput(storeInOperands, storeInCurrentOperator, storeInOutput) {
    const keys = document.querySelectorAll('.keypad input');
    keys.forEach(key => {
        key.addEventListener('click', () => {
            if (key.classList.contains('operand')) {
                storeInOperands(key.id);
            } else if (key.classList.contains('operator')) {
                storeInCurrentOperator(key.id);
            } else if (key.classList.contains('equality')) {
                storeEqualTo();
            }
        });
    });
}

function storeInOperands(keyID) {
    if (operands.hasOwnValue(keyID)) {
        const keyValue = operands[keyID];
        if (currentOperator.length === 0) {
            firstOperand.push(keyValue);
        } else if (currentOperator.length === 1) {
            secondOperand.push(keyValue);
        }  
    }
}

function storeInCurrentOperator(keyID) {
    if (operators.hasOwnValue(keyID)) {
        const keyValue = operators[keyID];
        currentOperator[0] = keyValue;
    }
}

function storeEqualTo(keyID) {
    if (allDisplaybleInputs.hasOwnValue(keyID)) {
        const keyValue = allDisplaybleInputs[keyID];
        equalTo[0] = keyValue;
    }
}

function displayOnScreen() {
    const expression = document.getElementById('expression');
    const value = document.getElementById('value');
}

function storeInOutput() {

}