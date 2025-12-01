//exercise 5.5
let maingrid_array=[];
let cell=64;
let count=0;
let columnsperRow=8;
let row=[];
for(count=0;count<= cell;count++){
    if(count% columnsperRow===0){
        if(row.length>0){
            maingrid_array.push(row);
        }
        row=[];
    }
    if(count<cell){
        let tempv=count;
        row.push(tempv);
    }
    if(count===cell){
        maingrid_array.push(row);
    }
}
console.log(maingrid_array);