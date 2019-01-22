let answer = prompt("Do you want to play a game?");
if (answer === "Yes" || "yes") {
    console.log(prompt("Great, please enter your name to begin."));
}else {
    alert("Alright. Maybe next time...")
}
let wins = 0;
let userHP = 40;
let grantHP = 10;

while (userHP <= 40) {
userHP = userHP - Math.floor(Math.random() * 2 + 1);
    console.log(`Sam's health is ${userHP}`);

    (grantHP <= 10) 
    grantHP = grantHP - Math.floor(Math.random() * 2 + 1);  {
        console.log(`Grant's health is ${grantHP}`);
    }

    if (userHP <= 0){
        console.log (`Game over. Grant wins.`);
        break;
    } 
    
    if (grantHP <= 0){
        wins++; grantHP = 10;
            console.log(`Sam get's one win.`);
        }

    if (wins >= 3) {
        console.log(`Congrats! Sam you win!`);
        break;
    }
    if (userHP <= 0){
        console.log(`Game Over. Grant wins.`);
    }
} 

