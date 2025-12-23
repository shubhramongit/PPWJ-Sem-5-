class student{
    #name;
    #roll;
    #marks;
    constructor(name,roll,marks){
        this.#name=name;
        this.#roll=roll;
        this.#marks=marks;


    }
    get name(){
        return this.#name;
    }
    get marks(){
        return this.#marks
    }
    set marks(marks){
        if(this.#marks>0&&this.#marks<100){
            marks=this.#marks;
        }
        else{
            marks=0;
        }
    }
    displayInfo(){
        console.log("name:",this.#name,"marks:",this.#marks)
    }
    result(){
        if(marks>40){
            console.log("pass");
        }
        else{
            console.log("fail")
        }
    }
}
let students=[
    new student("Shreemaya",124,90),
    new student("Shreemaya",124,90),
    
]