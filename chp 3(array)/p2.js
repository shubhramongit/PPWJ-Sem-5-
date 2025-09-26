//objects in objects
let company={
    companyName:"Healthy candy",
    activity:"food manufacture",
    address:{
    street:"xyz",
    number:123,
    zipcode:"3456",
    city:"bbsr",
    state:"odisha"
    },
  year:2010
}
//console.log(company.companyName);
//console.log(company.address.street)//
//company.address.street="abc";
//console.log(company);//

company["address"]["street"]="abc";
console.log(company)