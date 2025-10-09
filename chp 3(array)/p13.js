const arr=["Rock","Paper","Scissors"]
let player1=Math.floor(Math.random()*3)
let player1choice=ar[player1]
let player2=Math.floor(Math.random()*3)
let player2choice=ar[player2]
 
if(player1choice==player2choice){
    console.log("Tie")
}
else if(player1choice==rock&&player2choice==paper){
    console.log("player 2 wins")
}
else if(player1choice==paper&&player2choice==scissors)
{
    
}