//Imagine Riya works as a software developer in a company.
//Her basic salary is Rs.50,000. According to company policy:
//She gets 20% HRA (for housing).
//She gets 10% DA (for cost of living).
//She pays 5% income tax on the total salary.
//Write a JavaScript program to calculate the net salary of an em-
//ployee after deductions and allowances.Use conditional (ternary)
//operator//


let basic_salary=50000;
let HRA=(20/100)*basic_salary;
let DA=(10/100)*basic_salary;
let total_salary=basic_salary+HRA+DA;

let income_tax=total_salary>10000? total_salary*0.05:0;

console.log("Net salary ="+(total_salary-income_tax));