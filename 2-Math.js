/*
a. Here's a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers using the Math object.
*/

function calculateSquareRootOfSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((sum, number) => sum + Math.pow(number, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
}

/*
To display the square root of the sum of squares for an array of numbers, you can use the calculateSquareRootOfSumOfSquares function as follows:
*/

const numbers = [3, 4, 5];
const result = calculateSquareRootOfSumOfSquares(numbers);
console.log(`Square root of the sum of squares: ${result}`); // Output: Square root of the sum of squares: 7.0710678118654755
