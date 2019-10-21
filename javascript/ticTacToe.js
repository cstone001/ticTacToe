const spots = document.querySelectorAll('.spot');
const playerX = document.querySelector('#X');
const playerO = document.querySelector('#O');
const selected = document.querySelector('h2');
const playAgain = document.querySelector('#new');
//PLAYER 1 AND 2 CHOSE
let player1 = "";
let player2 = "";
//X'S OR O'S WASN'T SELECTED YET
let touched = false;
//WHOSE TURN IS IT
let player1Turn = true;
let winningPlayer = "";

function assignPlayer(e) {
    touched = true; 
    selected.innerHTML = `You've selected ${e.target.innerHTML}`; 
    e.target.disabled = true;

    if(touched && e.target.id == "X") { 
        player1 = "X";
        player2 = "O"; 
    }else if(touched && e.target.id == "O"){    
        player1 = "O";
        player2 = "X";                    
    } 
}

function newGame() {
    spots.forEach((spot) => {
        spot.innerHTML = "";
        spot.style.pointerEvents = "auto";
    
    });
    selected.innerHTML = "Player 1 select if you want to be X's or O's";
    playerX.disabled = false;
    playerO.disabled = false;
    player1Moves = [];
    player2Moves = [];
    touched = false;
    player1Turn = true;
}

//PLACE THE X OR THE O ON THE GAMEBOARD
function place(e) {    
    //ONLY PLACE AND X OR AN O IN EMPTY SPOTS    
    if(e.target.innerHTML == "") {  
    //MAKE SURE THEY SELECTED X'S OR O'S AND IT IS PLAYER 1 TURN
        if (touched && player1Turn) {  
            e.target.innerHTML = player1;
            player1Turn = false;
        } else if(touched && !player1Turn) {
            e.target.innerHTML = player2;
            player1Turn = true;
            e.target.style.color = "rgb(30, 53, 83)";
        } else {
            alert("You didn't select if you wanted to be player X or player O");
        }
    }
}

function winner() {
    var player1Moves = [];
    var player2Moves = [];
    //COLUMN ONE
    var one = "1";
    var two = "2";
    var three = "3";
    //COLUMN TWO
    var four = "4";
    var five = "5";
    var six = "6";
    //COLUMN THREE
    var seven = "7";
    var eight = "8";
    var nine = "9";
    
    if(touched) {
        spots.forEach((spot) => {    
            if(spot.innerHTML == player1) {    
                player1Moves.push(spot.id);
                if(player1Moves.includes(one) && player1Moves.includes(four) && player1Moves.includes(seven) || player1Moves.includes(two) && player1Moves.includes(five) && player1Moves.includes(eight) || player1Moves.includes(three) && player1Moves.includes(six) && player1Moves.includes(nine) || player1Moves.includes(one) && player1Moves.includes(two) && player1Moves.includes(three) || player1Moves.includes(four) && player1Moves.includes(five) && player1Moves.includes(six) || player1Moves.includes(seven) && player1Moves.includes(eight) && player1Moves.includes(nine) || player1Moves.includes(one) && player1Moves.includes(five) && player1Moves.includes(nine) || player1Moves.includes(three) && player1Moves.includes(five) && player1Moves.includes(seven)) {                             
                    winningPlayer = player1;
                    setTimeout(() => {
                        alert("PLAYER 1 WINS!!!");
                    }, 500);
                    
                    //NO CLICKS AFTER WINNER
                    if (winningPlayer !== "") {
                        spots.forEach((spot) => {    
                            spot.style.pointerEvents = "none";
                        });
                    }
                } 
            } else if(spot.innerHTML == player2) {    
                player2Moves.push(spot.id);
                if(player2Moves.includes(one) && player2Moves.includes(four) && player2Moves.includes(seven) || player2Moves.includes(two) && player2Moves.includes(five) && player2Moves.includes(eight) || player2Moves.includes(three) && player2Moves.includes(six) && player2Moves.includes(nine) || player2Moves.includes(one) && player2Moves.includes(two) && player2Moves.includes(three) || player2Moves.includes(four) && player2Moves.includes(five) && player2Moves.includes(six) || player2Moves.includes(seven) && player2Moves.includes(eight) && player2Moves.includes(nine) || player2Moves.includes(one) && player2Moves.includes(five) && player2Moves.includes(nine) || player2Moves.includes(three) && player2Moves.includes(five) && player2Moves.includes(seven)) {                               
                    winningPlayer = player2;
                    setTimeout(() => {
                        alert("PLAYER 2 WINS!!!");
                    }, 500);

                    //NO CLICKS AFTER WINNER
                    if (winningPlayer !== "") {
                        spots.forEach((spot) => {    
                            spot.style.pointerEvents = "none";
                        });
                    }
                }
            }                  
        });
    }
}

playerX.addEventListener('click', assignPlayer);
playerO.addEventListener('click', assignPlayer);
playAgain.addEventListener('click', newGame);
spots.forEach(spot => spot.addEventListener('click', place));
spots.forEach(spot => spot.addEventListener('click', winner));
