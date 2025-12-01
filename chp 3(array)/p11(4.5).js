//question 1
let prize=prompt("Enter a number between 0 and 10 : ");
prize=Number(prize);
let result;
switch(prize){
    case 0:
        result="You won a chocolate bar!!";
        break;
    case 1:
        result="You won a coffee mug";
        break;
    case 2:
        result="You won a movie ticket";
        break;
    case 3:
        result="You won a smartwatch";
        break;
    case 4:
        result="You won a free pizza!";
        break;
    case 5:
        result="You won a gift voucher!!";
        break;
    case 6:
        result="You won a backpack!";
        break;
    case 7:
        result="You won a shoes!";
        break;
    case 8:
        result="You won a phn!";
        break;
    case 9:
        result="You won a trip vacation!";
        break;
    case 10:
        result="You won a gift!";
        break;
    default:
        result="Invalid number";
}
