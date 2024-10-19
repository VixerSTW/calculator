let memory = 0; // Variable to store memory value

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || ''; // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Show error if evaluation fails
        setTimeout(clearDisplay, 1500); // Clear display after 1.5 seconds
    }
}

function calculateTrigonometric(func) {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        switch (func) {
            case 'sin':
                display.value = Math.sin(value);
                break;
            case 'cos':
                display.value = Math.cos(value);
                break;
            case 'tan':
                display.value = Math.tan(value);
                break;
        }
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value / 100; // Convert to percentage
    }
}
