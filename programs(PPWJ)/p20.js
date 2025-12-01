//exercise 7.2 1/12/25
class Person {
constructor(firstname, lastname){
this.firstname = firstname;
this.lastname = lastname;
  }
 fullName(){
    console.log(this.firstName+this.lastName)
 }
}
let frnd1=new person2("hello","Suvam","Das")
let frnd2=new person2("hello","shubhram","jeet")

let person1=frnd1.fullName();
let person2=frnd2.fullName();