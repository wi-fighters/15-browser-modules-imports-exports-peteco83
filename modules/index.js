import { modulo, percentage, percentageOf, difference } from "/modules/percentage.js";

let calculations = ["modulo", "percentage", "percentageOf", "difference"];

function calcOnChange(inputArray, input, resultCalc, calculation) {
    input.addEventListener('change', () => {
        resultCalc.value = calculation(Number(inputArray[0].value), Number(inputArray[1].value));
    })
}

calculations.forEach(calculation => {
    // Get the input fields for the operator
    const input = [
        document.getElementById(`${calculation}_1`),
        document.getElementById(`${calculation}_2`)
    ];
    // Get the result field for the operator
    const result = document.getElementById(`${calculation}_result`);

    input.forEach((field) => {
        if (field.classList.contains("arithmetic")) {
            calcOnChange(input, field, result, modulo);
        }
        if (field.classList.contains("percentage")) {
            calcOnChange(input, field, result, percentage);
        }
        if (field.classList.contains("percentageOf")) {
            calcOnChange(input, field, result, percentageOf)
        }
        if (field.classList.contains("difference")) {
            calcOnChange(input, field, result, difference);
        }
    })
});
