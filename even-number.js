// Create a new file called even-numbers.js
// Put the code below in that file

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even numbers:");

for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
