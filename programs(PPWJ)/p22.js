//1/12/25
//create a class vehicle that has color, current speed and max speed. Add two methods move and accelerate where you will passing amount as a parameter.

class vehicle{
    constructor(color,currentspeed,maxspeed){
        this.color=color;
        this.currentspeed=currentspeed;
        this.maxspeed=maxspeed;
    }
    move(){
        console.log("moving with a speed"+this.currentspeed)
    }
    accelerate(amount){
        this.currentspeed+=amount;
    }
}
class motorcycle extends vehicle{
    constructor(color,currentspeed,maxspeed,fuel){
        super(color,currentspeed,maxspeed);
        this.fuel=fuel;
    }
    dowheels(){
        console.log("driving on wheels")
    }
}
let m=motorcycle("black",100,200,"petrol");
console.log(m.accelerate(20))