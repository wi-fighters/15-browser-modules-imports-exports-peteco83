
/**
 * Returns the result of a mathematical calculation, based on the given
 * operation (add, subtract, multiply, divide, modulo).
 *
 * Examples:
 * calculate("add", 5, 10)       =>  5 + 10 = 15
 * calculate("divide", 100, 20)  =>  100 / 20 = 5
 *
 * @param  {string} operation
 * @param  {number} first       
 * The left value of the operation
 * @param  {number} second      
 * The right value of the operation
 * @return {number}
 */
function calculateArithmetic(operation, first, second) {
    let result = 0;
    switch (operation) {
        case 'add':
            return first + second;

        case 'subtract':
            return first - second;

        case 'multiply':
            return first * second;

        case 'divide':
            if (first > 0 && second > 0) {
                return first / second;
            } else {
                return 0;
            }

        case 'modulo':
            if (first > 0 && second > 0 && first >= second) {
                return first % second;
            } else {
                return 0;
            }

        default:
            return 0;
    }
}

export { calculateArithmetic };
