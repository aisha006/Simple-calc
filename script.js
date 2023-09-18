let display = document.getElementById('display');
let currentInput = '';
let calculatedValue = 0;
let values = new Array();
let operators = new Array();
let storedValue = '';



function appendToDisplay(value) {
    currentInput += value;
    if (value == '+' || value == '-' || value == '*' || value == '/' || value == '=') {
        if (storedValue.length != 0) {
            operators.push(value);
            values.push(storedValue);
            storedValue = '';
        }
    } else {
        storedValue += value;
    }

    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    values = new Array();
    operators = new Array();
    calculatedValue = 0;
    display.innerText = '0';
}

function calculateResult() {
    if (storedValue.length != 0) {
        values.push(storedValue);
        storedValue = '';
    }
    console.log(values);
    console.log(operators);
    if (values.length == 0 || operators.length == 0)
        return;

    calculatedValue = parseFloat(values[0]);
    for (var i = 0; i <= operators.length - 1; i++) {
        let currentOperator = operators[i];
        const value2 = parseFloat(values[i + 1]);

        switch (currentOperator) {
            case '+':
                calculatedValue = calculatedValue + value2;
                break;
            case '-':
                calculatedValue = calculatedValue - value2;
                break;
            case '*':
                calculatedValue = calculatedValue * value2;
                break;
            case '/':
                if (value2 !== 0) {
                    calculatedValue = calculatedValue / value2;
                } else {
                    alert('Error: Division by zero');
                    clearDisplay();
                    return;
                }
                break;
            default:
                calculatedValue = value2;
                break;
        }
    }



    display.innerText = calculatedValue;
    currentInput = '';
    values = new Array();
    operators = new Array();
}

clearDisplay();