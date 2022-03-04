// Parameters of the dice game;
// You roll a 1 you lose - unless its to hit 21 
// Hit 21 to win 

// PLAYER 1
// score is the h2 display
const score = document.querySelector("#score"); 
// btn roll button
const roll = document.querySelector("#roll")
// dice images 
const dice = document.querySelector("#dice");
// score counter h2 display
let scoreCounter = document.querySelector("#scoreCounter");

let Counter = 0;
let user1 = 0;

// PLAYER 2
const score2 = document.querySelector("#score2"); 
// btn roll button
const roll2 = document.querySelector("#roll2")
// dice images 
const dice2 = document.querySelector("#dice2");
// score counter h2 display
let scoreCounter2 = document.querySelector("#scoreCounter2");

let Counter2 = 0;
let user2 = 0;
// ROLL button player 1
roll.addEventListener("click", function() {
    // button display
    roll.textContent = "Roll"

    // 1. Random number
    // player1
    let dice = Math.floor(Math.random() * 6) + 1;
    // PLAYER 2
    let dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result 
    let diceDOM = document.querySelector("#dice");
    diceDOM.style.display = "block";
    diceDOM.src = `./images/${dice}.png`;
    // 2. Display the result PLAYER 2
    let diceDOM2 = document.querySelector("#dice2");
    diceDOM2.style.display = "block";
    diceDOM2.src = `./images/${dice2}.png`;

// 3. DICE ROLL 
// player 1
    user1 = dice ;
    score.textContent = user1;
// player 2
user2 = dice2;
score2.textContent = user2;

    //4.  score counter 
    // PLAYER 1
    Counter += user1
    scoreCounter.textContent = Counter;
    // PLAYER 2
    Counter2 += user2
    scoreCounter2.textContent = Counter2;

// IF STATEMENT :
// if dice = 1
        if(dice === 1 && Counter != 20) {
             score.textContent = `You lose!`;
            user1 = 0;
            //  score2.textContent = `You lose!`;
            // user2 = 0;
            roll.textContent = `PLAY AGAIN`;
            roll.addEventListener("click", () => {
                window.location.reload();
            })
} 
//  IF COUNTER IS > 1 
        else if (Counter <=20){
            score.textContent = `${score.textContent}`;
            scoreCounter.textContent = `${scoreCounter.textContent}`;
            user1 = 0;
        }
        //  IF COUNTER ONLY = 21
    else if (Counter === 21){
        score.textContent = ` WINNER `;
        scoreCounter =  `${scoreCounter.textContent}`;
        user1 = 0;
        roll.textContent = `WINNER`;
    } 
    
    //  COUNTER OVER 21
    else {
        scoreCounter.textContent = ` ${scoreCounter.textContent}`
        scoreCounter2.textContent = ` ${scoreCounter2.textContent}`
        roll.textContent = `PLAY AGAIN`;
        roll.addEventListener("click" , ( ) => {
            window.location.reload()
        })
    }

    });


