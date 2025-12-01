//properties 1/12/25
class Person {
#firstname;
#lastname;
  constructor(firstname, lastname) {
this.#firstname = firstname;
this.#lastname = lastname;
}
greet() {
console.log("Hi",this,this.#firstname);
}
get firstname(){
    return this.#firstname;
}
get lastname(){
    return this.#lastname;
}
set firstname(firstname){
    if(firstname.startsWith("M")){
        this.#firstname=firstname;
    }
}
set lastname(lastname){
    this.#lastname=lastname;
 }
}
let frnd1=new person2("hello","Suvam","das")
person2.greet()
console.log(person2.firstname)
person2.firstname="xyz"