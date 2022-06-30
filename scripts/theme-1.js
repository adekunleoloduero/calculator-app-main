
//Get value from keys to the screen
window.onload = function() {
    focusOnScreen();
    appendKeyValuesToScreen()
}


//Focus on the screen immediately the page loads.
function focusOnScreen() {
    const screen = document.querySelector('#screen');
    screen.focus();
}

function appendKeyValuesToScreen() {
    let previousKeyCategory = "", currentKeyCategory;
    
    const screen = document.getElementById("screen");
    const keys = document.querySelectorAll(".keypad input");
    keys.forEach(key => {
        key.addEventListener("click", () => {
            //Get category of the key that is pressed
            if (key.classList.contains("operand")) {
                currentKeyCategory = 'operand';
            } else if (key.classList.contains("operator")) {
                currentKeyCategory = 'operator'
            } else if (key.classList.contains("special")) {
                currentKeyCategory = 'special';
            }

            //At the start
            if (previousKeyCategory == "" && currentKeyCategory == 'operand' || previousKeyCategory == 'operand' && currentKeyCategory == 'operand' && currentKeyCategory != 'special') {
                screen.value = screen.value + key.value;
            } else if (previousKeyCategory == 'operand' && currentKeyCategory == 'operator' && currentKeyCategory != 'special') {
                screen.value = screen.value + " " + key.value;
            } else if (previousKeyCategory == 'operator' && currentKeyCategory == 'operand' && currentKeyCategory != 'special') {
                screen.value = screen.value + " " + key.value;
            } else if (previousKeyCategory == 'operand' || previousKeyCategory == 'operator' || previousKeyCategory == 'special' && currentKeyCategory == 'special') {
                if (key.id == 'equal-to') {
                    //To do if key is eual to
                    // doCalculations(screen.value);
                } else if (key.id == 'delete') {
                    //To do if key is delete
                    // deleteLastValue(screen.value);
                    const newScreenValue = deleteLastValue(screen.value);
                    screen.value = newScreenValue;

                } else if (key.id == 'reset') {
                    screen.value = ""; //Reset the screen
                }
            }
            previousKeyCategory = currentKeyCategory;
            focusOnScreen();
        });
    });
}


function doCalculations(input) {
    const output = 0;
    return output;
}

function deleteLastValue (screenValue) {
    let newScreenValue = "";
    const screenValueSplited = screenValue.split(" ");
    const lastValue = screenValueSplited[-1];

    if (lastValue.length < 2) {
        
    }

    const valuesAfterLastValueRemoved = screenValueSplited.slice(0, screenValueSplited.length - 1);
    for (const val of valuesAfterLastValueRemoved) {
        newScreenValue += " " + val;
    }

    return newScreenValue;
}

