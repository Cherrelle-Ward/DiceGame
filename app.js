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


// ROLL button
roll.addEventListener("click", function() {
    // button display
    roll.textContent = "Roll"
    // 1. Random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    let diceDOM = document.querySelector("#dice");
    diceDOM.style.display = "block";
    diceDOM.src = `./images/${dice}.png`;
// DICE ROLL 
    user1 = dice ;
    score.textContent = user1;
    // score counter 
Counter += user1
scoreCounter.textContent = Counter;
// if dice = 1
        if(dice === 1 && Counter != 20) {
             score.textContent = `You lose!`;
            user1 = 0;
            roll.textContent = `PLAY AGAIN`;
            roll.addEventListener("click", () => {
                window.location.reload();
            })
} 

//  IF COUNTER IS > 1 
        else if (Counter <=20){
            score.textContent = ` You rolled a ${score.textContent}`;
            scoreCounter.textContent = `your counter num is - ${scoreCounter.textContent}`;
            user1 = 0;
        }
        //  IF COUNTER ONLY = 21
    else if (Counter === 21){
        score.textContent = ` WINNER `;
        scoreCounter = `your counter num is - ${scoreCounter.textContent} WINNER`;
        user1 = 0;
        roll.textContent = `WINNER`;
    }
    //  COUNTER OVER 21
    else {
        scoreCounter.textContent = ` ${scoreCounter.textContent} - BUSTED! `
        roll.textContent = `PLAY AGAIN`;
        roll.addEventListener("click" , ( ) => {
            window.location.reload();
        })
    }

    
    });


