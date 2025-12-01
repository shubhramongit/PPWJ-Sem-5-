let groups = [
["Martin", "Daniel", "Keith"],
["Margot", "Marina", "Ali"],
["Helen", "Jonah", "Sambikos"],
];
for (let i = 0; i < groups.length; i++) {
   let count = 0;
     for (let j = 0; j < groups[i].length; j++) {
           if(groups[i][j].startsWith("M")){
                   count++;
} 
            else {
               continue;
}
if (count=== 2){
     
                break;
}
}
}