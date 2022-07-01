
//Get value from keys to the screen
window.onload = function() {
    focusOnScreen();
    showOrModifyInput()
}


//Focus on the screen immediately the page loads.
function focusOnScreen() {
    const screen = document.querySelector('#screen');
    screen.focus();
}

function showOrModifyInput() {
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
            } else if (previousKeyCategory == " " || previousKeyCategory == 'operator' && currentKeyCategory == 'operator') {
                removeOrReplaceLastValue(screen.value, key.value);
            } else if (previousKeyCategory == 'operand' || previousKeyCategory == 'operator' || previousKeyCategory == 'special' && currentKeyCategory == 'special') {
                if (key.id == 'equal-to') {
                    //To do if key is eual to is clicked/pressed
                    // doCalculations(screen.value);
                } else if (key.id == 'delete') {
                    //To do if delete key is clicked/pressed
                    const newScreenValue = removeOrReplaceLastValue(screen.value);
                    screen.value = newScreenValue;

                } else if (key.id == 'reset') {
                    //To-do if reset key is clicked/pressed
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

function removeOrReplaceLastValue (screenValue, replacement) {
    let newScreenValue = "";
    // const screenValueSplited = screenValue.split(" ");
    const screenValueSplited = () => {
        let result = [];
        for (let i = 0; i < screenValue.length; i++) {
            if (screenValue[i] != ' ') {
                result.push(screenValue[i]);
            }
        }
        return result;
    }

    console.log("splitedValues", screenValueSplited());

    let lastValue = screenValueSplited[screenValueSplited.length - 1];

    if (lastValue.length >= 1 && replacement == undefined) { //Remove only the last charater if last value contain several characters.
        lastValue = lastValue.substring(0, lastValue.length - 1);
    } else if (lastValue.length == 1 && replacement != undefined) { //Replace last value of single character with the specified "replacement"
        lastValue = replacement;
    }

    let valuesAfterLastValueRemoved = screenValueSplited.slice(0, screenValueSplited.length - 1); //Temporarily remove last value
     console.log("valuesAfterLastValueRemoved", valuesAfterLastValueRemoved);
    valuesAfterLastValueRemoved.push(lastValue); //Append last value after eliminating the unwanted character
    console.log("valueAfterModifiedLastValueAppended", valuesAfterLastValueRemoved);
    
    for (const val of valuesAfterLastValueRemoved) {
        newScreenValue = `${newScreenValue} ${val}`;
    }

    return newScreenValue;
}

