
window.onload = function() {
    focusOnScreen();
    processInput(getInputs, deleteValue);
}


//Focus on the screen immediately the page loads.
function focusOnScreen() {
    const screen = document.querySelector('#screen');
    screen.focus();
}


function processInput(getInputs, deleteValue) {
    let specialInput;
    const displaybleInputs = [];
    const keys = document.querySelectorAll(".keypad input");

    keys.forEach(key => {
        key.addEventListener("click", () => {
            if (key.classList.contains('operand') || key.classList.contains('operator')) {
                getInputs(displaybleInputs, key.id);
                focusOnScreen();
            } else if (key.classList.contains('special')){
                specialInput = key.id;
                if (specialInput == "delete") {
                    deleteValue(displaybleInputs, displaybleInputs[displaybleInputs.length - 1]);
                    focusOnScreen();
                } else if (specialInput == "reset") {
                    clearScreen();
                    focusOnScreen();
                } else if (specialInput == "equal-to") {
                    doCalculations(displaybleInputs);
                    focusOnScreen();
                }
            }
        });
    });
}


function showInputs(inputs) {
    const screen = document.getElementById("screen");
    let screenValue = "";

    for (const input of inputs) {
        screenValue = `${screenValue}${input.toString()}`;
    }
    screen.value = screenValue;
}

function getInputs(inputs, ID) {
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
    for (const key in operatorsAndOperands) {
        if (key == ID) {
            inputs.push(operatorsAndOperands[key]);
        }
    }

    showInputs(inputs);
}


function deleteValue(inputs, valToDelete) {
    inputs.pop(valToDelete);
    showInputs(inputs);
}

function clearScreen() {
    const screen = document.getElementById("screen");
    screen.value = "";
}

function doCalculations(inputs) {

}




