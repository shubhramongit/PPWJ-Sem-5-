function validateAge(input){
    let age=parseInt(input);

    if(isNaN(age)){
        console.log("Please enter a valid number.");
    }
    else{
        console.log("Valid age:", age);
    }
}
validateAge("25 years");
validateAge("thirty");
validateAge("30");