let car={
    model:"golf",
    make:"volksvagen",
    color:"black"
};
let arr=Object.keys(car);
console.log(arr)
for(i=0;i<arr.length;i++){
    console.log(arr[i]+"  "+car[arr[i]])
}
//convert values into array
for(let key of Obeject.values(car)){
    console.log(key)

}
for(const[key,value]of Object.entries(car))
{
    console.log(key+""+values)
}