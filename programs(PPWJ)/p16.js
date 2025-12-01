let num1=2;
let num2=3;
let operat=" "
function calc(num1,num2,operat)
{
    if(operat=="+"){
        return num1+num2;
}
else if(operat=="-"){
    return num1-num2;
}
else{
    return num1+num2;
}
}
let res=calc(num1,num2,operat)
console.log(res);