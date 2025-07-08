
function calculate() {
    const display = document.querySelector('input[name="display"]');
    try {
        // Keep % as modulus operator for remainder calculations
        let expression = display.value;
        
        // Check for empty input
        if (expression === '') {
            display.value = 'Error';
            return;
        }
        
        // Evaluate the expression
        let result = eval(expression);
        
        // Check for invalid results
        if (result === Infinity) {
            display.value = 'Infinity';
        } else if (result === -Infinity) {
            display.value = '-Infinity';
        } else if (isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    const display = document.querySelector('input[name="display"]');
    display.value = '';
}

function addPercent() {
    const display = document.querySelector('input[name="display"]');
    display.value += '%';
}
