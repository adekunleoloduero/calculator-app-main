
window.onload = function() {
    focusOnScreen();
    processInput(getInputs, deleteValue, clearScreen);
}

const displaybleInputs = [];

//Focus on the screen immediately the page loads.
function focusOnScreen() {
    const screen = document.querySelector('#screen');
    screen.focus();
}


function processInput(getInputs, deleteValue, clearScreen) {
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
            } else if ()
            else {
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
    //A given value should not contain multiple dots
    /** 
     * Get last value on the screen
     * Count number of dot it contains
     * If number of dot is greater less that zero append dot
     * Otherwise, don't append dot
    */

    //Should not start with a dot
    /**
     * If length of displaybleInput is 0 do not append dot
     */
    if (displaybleInputs.length == 0) {
        displaybleInputs = [];
    }

    //A dot should not come immediately after another dot
    /**
     * If lastInputType is dot don't append dot
     */

    if (displaybleInputs[displaybleInputs.length - 1] == ".") {
        displaybleInputs[displaybleInputs.length - 1] = ".";
    }

    //An operator should not come immediately after a dot
    /**
     * If lastInputType is an operator don'tt append dot
     */
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




