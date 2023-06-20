/*
a. Here's a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false:
*/

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

/*
b. checking a given positive integer with the isPrime function
*/

const inputNumber = 13;
const isInputPrime = isPrime(inputNumber);
console.log(isInputPrime);
