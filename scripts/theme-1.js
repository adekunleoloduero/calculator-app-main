
window.onload = function() {
    focusOnScreen();
    processInput(getInputs, deleteValue, clearScreen, handleDot, preventOperatorAfterDot);
}

let displaybleInputs = [];
const operators = {
    "addition": " + ",
    "subtraction": " - ",
    "multiplication": " x ",
    "division": " / ",
}



let getScreenValue = () => {
    const screenValue = document.getElementById("screen").value;
    return screenValue;
}

//Focus on the screen immediately the page loads.
function focusOnScreen() {
    const screen = document.querySelector('#screen');
    screen.focus();
}


function processInput(getInputs, deleteValue, clearScreen, handleDot, preventOperatorAfterDot) {
    let specialInput;
    const keys = document.querySelectorAll(".keypad input");
    keys.forEach(key => {
        key.addEventListener("click", () => {
            if (key.classList.contains('operand') || key.classList.contains('operator')) {
                getInputs(displaybleInputs, key.id, preventConsequtiveOperators);
                focusOnScreen();

            } else if (key.classList.contains('special')){
                specialInput = key.id;
                if (specialInput == "delete") {
                    deleteValue(displaybleInputs);
                    focusOnScreen();

                } else if (specialInput == "reset") {
                    clearScreen(displaybleInputs);
                    focusOnScreen();

                } else if (specialInput == "equal-to") {
                    doCalculations(displaybleInputs);
                    focusOnScreen();

                } else if (specialInput == "dot") {
                    handleDot();
                    focusOnScreen();

                } else if (operators.hasOwnProperty(specialInput)) {
                    preventOperatorAfterDot(specialInput);
                    focusOnScreen();
                }
            }
        });
    });
}


function showInputs(displaybleInputs) {
    const screen = document.getElementById("screen");
    let screenValue = "";

    for (const input of displaybleInputs) {
        screenValue = `${screenValue}${input.toString()}`;
    }
    screen.value = screenValue;
}

function getInputs(displaybleInputs, ID, preventConsequtiveOperators) {
    const operatorsAndOperands = {
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
    }

    const operators = {
        "addition": " + ",
        "subtraction": " - ",
        "multiplication": " x ",
        "division": " / ",
        // "dot": "." //Here dot is treated as an operator, for convenience
    }

    for (const key in operatorsAndOperands) {
        if (key == ID) {
            let lastInputType;
            if (operators.hasOwnProperty(key) == true) {
                for (const op in operators) {
                    if (operators[op] == displaybleInputs[displaybleInputs.length - 1]) {
                        lastInputType = op;
                    }
                }
                preventConsequtiveOperators(displaybleInputs, lastInputType, key)
            } else {
                displaybleInputs.push(operatorsAndOperands[key]);
            }
        }
    }

    showInputs(displaybleInputs);
}


function deleteValue(displaybleInputs) {
    displaybleInputs.pop();
    showInputs(displaybleInputs);
}

function clearScreen(displaybleInputs) {
    displaybleInputs.splice(0, displaybleInputs.length);
    showInputs(displaybleInputs);
}


function preventConsequtiveOperators(allInputs, lastInputType, newInputType) {
    let inputValue;
    const operators = {
        "addition": " + ",
        "subtraction": " - ",
        "division": " / ",
        "multiplication": " x ",
        // "dot": "." //Here dot is treated as an operator, for convenience
    }

    inputValue = operators[newInputType];
    if (inputValue == allInputs[allInputs.length - 1] || operators.hasOwnProperty(lastInputType)) {
        allInputs[allInputs.length - 1] = inputValue; //1. Replace the last value on the screen with the new input if the both the former and the latter operators
    } else {
        allInputs.push(inputValue); //2. Add the new input to the screen if condition 1 failed. 
    }

}


function handleDot() {
    const operators = {
        "addition": " + ",
        "subtraction": " - ",
        "division": " / ",
        "multiplication": " x ",
    }

    console.log(displaybleInputs);
    //A dot should not come immediately after an operator
    for (const operator in operators) {
        if (displaybleInputs[displaybleInputs.length - 1] == operators[operator]) {
            return;
        }
    }

    //A given value should not contain multiple dots
    let screenValue = getScreenValue();
    const screenValueSplited = screenValue.split(" ");
    let lastValue = screenValueSplited[screenValueSplited.length - 1];
    let dotCount = 0;
    for (const dot of lastValue) {
        if (dot == ".") {
            dotCount += 1;
        }
    }
    if (dotCount > 0) {
        return;
    }

    //Should not start with a dot
    if (displaybleInputs.length == 0) {
        displaybleInputs = [];
    }

    //A dot should not come immediately after another dot
    else if (displaybleInputs[displaybleInputs.length - 1] == ".") {
        displaybleInputs[displaybleInputs.length - 1] = ".";
    }

    //If non of the above is the case then append dot to displaybleInputs
    else {
        displaybleInputs.push(".");
    }

    showInputs(displaybleInputs);
}

function preventOperatorAfterDot(specialInput) {
    //Operator should not come immediately after a dot.
    if (operators.hasOwnProperty(specialInput) && displaybleInputs[displaybleInputs.length - 1] == ".") {
        return;
    }
}


function doCalculations(inputs, addition, subtraction, multiplication, division) {

}

function addition(val1, val2) {

}

function subtraction(val1, val2) {
    
}

function multiplication(val1, val2) {
    
}

function division(val1, val2) {
    
}




