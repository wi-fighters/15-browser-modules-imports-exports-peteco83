

function calculatePercentage(operation, first, second) {
    let result = 0;

    switch (operation) {
        case 'percent':
        return (first * second) / 100;

        case 'percentNumber':
        return (first * 100) / second;

        case 'difference':
        if (first === second) {
            return 0;
        }
        else  {
            let calc = second - first;
            return (calc * 100) / first 
        } 
        default:
            return 0;
    }
}

export {calculatePercentage};
