// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => console.log`Hello, ${name}`;

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const sum = (num1, num2) => console.log(num1 + num2);

sum(1, 2);

// Q3) Write a simple arrow function that squares a number.

const square = (number) => console.log(number * number);
square(2);

// Q4) [🌶️🌶️] Create an arrow function that takes an
// array of numbers and returns a new array with each number squared.

let numbers = [1, 2, 3, 4];
let newArray = [];
const SquareNumbers = (array) => {
  for (let index = 0; index < array.length; index++) {
    newArray.push(square(array[index]));
  }
  return newArray;
};

console.log(SquareNumbers(numbers));
