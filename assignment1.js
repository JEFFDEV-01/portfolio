// function to calculate arithemic
const calculate = (num1, num2, operation) => {
    // Validate that the input numbers are not null or undefined
    if (num1 == null || num2 == null) return "Invalid input numbers";

    // Perform the appropriate operation based on the input string
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide': 
             if(num2 === 0 ) {
                return "Cannot divide by zero" 
             }
            else { return num1 / num2
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
