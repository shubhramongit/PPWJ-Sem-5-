let user=Number(prompt("Enter the security code"));
console.log("Security code "+user)
let sum=0;
while(user>0){
    let temp= user%10;
    sum=sum+temp;
    user=Math.floor(user/10);
}
let flag=0;
for(i=0;i<sum/2;i++){
    if(sum%i==0){
        flag=1;
        break;
    }
}
console.log("Sum is "+sum)
if(flag==0){
    console.log("It is not a prime number")
}
else{
    console.log("It is a prime number")
}