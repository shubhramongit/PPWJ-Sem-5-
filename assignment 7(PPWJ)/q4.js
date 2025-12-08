let students=["Ali","Meera","Ravi","Ali","Sara"];

let allStrings=students.every(item => typeof item=== "string");
console.log("All are strings:" , allStrings);

students.copyWithin(0,2,4);
console.log("Updated:" , students);