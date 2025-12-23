const myCar = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  isElectric: false
};
let propertyName = "color";
myCar[propertyName] = "blue";
propertyName = "forSale";
myCar[propertyName] = true; 
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
console.log("For Sale:", myCar.forSale);
