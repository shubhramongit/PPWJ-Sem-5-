let cart=["Shoes","Shoes","Bag","Watch","Shoes","Bag"];

let uniqueItems=cart.filter((item,index)=> cart.indexOf(item)===index);

console.log("Unique cart:",uniqueItems);