//A school is building a web-based calculator for its students. The
//calculator should:
//-Take two numbers as input.
//-Perform addition, subtraction, multiplication, division, and mod-
//ulus.
//-Display the results clearly to the user. Write a JavaScript program
//to implement this calculator.//

let n1 = prompt("Enter the first number:");
let n2 = prompt("Enter the second number:");

// Convert inputs to numbers
n1 = Number(n1);
n2 = Number(n2);

// Perform calculations
let sum = n1 + n2;
let difference = n1 - n2;
let product = n1 * n2;
let quotient = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
let modulus = n2 !== 0 ? n1 % n2 : "Cannot modulus by zero";

// Display the results
alert(
  "Results:\n" +
  "Addition: " + sum + "\n" +
  "Subtraction: " + difference + "\n" +
  "Multiplication: " + product + "\n" +
  "Division: " + quotient + "\n" +
  "Modulus: " + modulus
);
