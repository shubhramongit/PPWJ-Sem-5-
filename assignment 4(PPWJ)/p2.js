let age=Number(prompt("Enter your age"));
if(age<=12){
    console.log("you are a child and ticket price is Rs5")
}
else if (age>12&&age<=18){
    console.log("you are a Teen and ticket price is Rs10")
}
else if(age>18 && age<=60){
    console.log("You are a adult and ticket price is Rs20")
}
else{
    console.log("You are a senior and ticket price is Rs15")
}