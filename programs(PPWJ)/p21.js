//properties
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
}
let frnd1=new person2("hello","Suvam","das")
