// function to calculate arithemic
const calculate = (number1, number2, operation) => {
    // Validate that the input numbers are not null or undefined
    if (number1 == null || number2 == null) return "Invalid input numbers";

    // Perform the appropriate operation based on the input string
    switch (operation) {
        case 'add':
            return number1 + number2;
        case 'subtract':
            return number1 - number2;
        case 'multiply':
            return number1 * number2;
        case 'divide': 
             if(number2 === 0 ) {
                return "Cannot divide by zero" 
             }
            else { return number1 / number2
            };
        default:
            return "Invalid operation";
    }
};

// Testing the calculate function with different inputs
console.log(calculate(5, 3, 'add'));      // Should return 8
console.log(calculate(10, 2, 'divide'));  // Should return 5
console.log(calculate(7, 2, 'subtract')); // Should return 5
console.log(calculate(4, 3, 'multiply')); // Should return 12
console.log(calculate('add'))             // invalid 
console.log(calculate(5, 0, 'divide'));   // Should return "Cannot divide by zero"
console.log(calculate(5, 3, 'modulus'));  // Should return "Invalid operation"
