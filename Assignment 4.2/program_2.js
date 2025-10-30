let user=prompt("enter the Pin");
let reverse="";
for(i=user.length-1;i>=0;i--){
    reverse=reverse+user[i];
}
console.log("Original number is "+user);
console.log("New number is "+reverse);