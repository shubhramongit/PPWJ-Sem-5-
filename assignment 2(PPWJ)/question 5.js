//enter the year of your choice!!
let year=Number(prompt("Enter the year"));
console.log("The given year is :"+year);

//checking if the year is leap year or not..
let res=((year%100!==0)&&(year%4==0))||(year%400==0)? "is a leap year" :"not a leap year";
console.log(res);