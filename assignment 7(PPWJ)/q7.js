let marks=[45.5,89.4,32.6,50.5];

let rounded=marks.map(m => Math.round(m));
console.log("Rounded:", rounded);

let ceilMarks=marks.map(m => Math.ceil(m));
console.log("Ceil:" ,ceilMarks);