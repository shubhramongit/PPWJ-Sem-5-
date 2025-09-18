
//Give the roll number of the student
let stul=Number(prompt("Enter the student roll number"));
console.log("The student roll number is "+stul);


//checking if the student is eligible or not for the race i.e by if the roll no is divisible by 3 or 5
let res=(stul%3 && stul%5)==0? "Eligible for the race": "not eligible for the race";
console.log(res);