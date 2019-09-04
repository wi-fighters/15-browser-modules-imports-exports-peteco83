//Imports
import { calculateArithmetic } from "/modules/arithmetic.js";
import { calculatePercentage } from "/modules/percentage.js"
import { calculateAspectRatio } from "/modules/ratio.js";

// Array of operations to perform switch
const operations = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'percent', 'percentNumber', 'difference', 'ratio'];
const functions = [calculateArithmetic, calculatePercentage];
// Loop through all operators

operations.forEach(function (operation) {
    // Get the input fields for the operator
    const input = [
        document.getElementById(`${operation}_1`),
        document.getElementById(`${operation}_2`)
    ];

    // Get the result field for the operator
    const result = document.getElementById(`${operation}_result`);

    // Add an event listener for the input fields, to update the calculation, when
    // one of them changes to a new value.
    input.forEach(function (field) {
        if (field.classList.contains("arithmetic")) {
            field.addEventListener('change', function (e) {
                result.value = calculateArithmetic(
                    operation,
                    Number(input[0].value),
                    Number(input[1].value)
                );
            });
        } else if (field.classList.contains("percentage")) {
            field.addEventListener('change', function (e) {
                result.value = calculatePercentage(
                    operation,
                    Number(input[0].value),
                    Number(input[1].value)
                );
            });
        } 
    })
});
