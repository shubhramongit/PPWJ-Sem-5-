// 1. Convert number 50 into a string
const numToStr = String(50);
// or
// const numToStr = 50 + "";

// 2. Convert string "123" into a number
const strToNum = Number("123");
// or
// const strToNum = parseInt("123", 10);

// 3. Convert empty string "" into a boolean
const emptyStrToBool = Boolean("");
// or
// const emptyStrToBool = !!"";

console.log(numToStr, typeof numToStr);      // "50" "string"
console.log(strToNum, typeof strToNum);      // 123 "number"
console.log(emptyStrToBool, typeof emptyStrToBool);  // false "boolean"
