//A flooring company wants to build a small Tile Calculator App.The
//app should help customers find out how many rectangular tiles are
//needed to cover a floor.
//-The program must take the length and width of the floor as input.
//-It should also take the length and width of one tile as input. Using
//arithmetic operators, the program should calculate:
//1. The area of the floor: A f loor = length f loor × width f loor
//2. The area of one tile: A tile = length tile × width tile
//3. The number of tiles required: N =
//A f loor
//A tile
//Additionally, display the perimeter// of the floor for boundary design
//purposes.Write a JavaScript program to perform these calculations
//using arithmetic operators.

let length_floor=Number(prompt("Enter the length of the floor"));
let breadth_floor=Number(prompt("enter the breadth of the floor"));
console.log("The length of the floor is "+length_floor);
console.log("The breadth of the floor is "+breadth_floor);

let length_tile=Number(prompt("Enter the length of the tile"));
let breadth_tile=Number(prompt("Enter the breadth of the tile"));
console.log("The length of the tile "+length_tile);
console.log("The breadth of the tile is "+breadth_tile);

//area of the floor
let area_floor=length_floor*breadth_floor;
console.log("The area of the tile is "+area_floor);

//area of the tile 
let area_tile=length_tile*breadth_tile;
console.log("The area of the tile is" +area_tile);

//no. of tiles required
let tile_required=area_floor/area_tile;
console.log("The no. of tiles required is "+tile_required);

//perimeter of the floor
let peri_floor=2*(length_floor+breadth_floor);
console.log("The perimeter of the floor is "+peri_floor);
