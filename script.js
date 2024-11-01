function main() {
    // This is the start of the game.
    alert("Welcome to Chriselda's Haunted Mansion where every decision you make decides your fate.");
    startGame();
}

function attic() {
    // This is the choice to open the box or leave it alone; this function is for the attic and is crucial for survival.
    let boxanswer = prompt("Welcome to the attic! You see an old box, will you open it (1) or leave it (2)?");
    if (boxanswer == 1) {
        alert("A bunch of bats fly out of the box and you die a slow and horrible death from rabies. GAME OVER");
    } else {
        alert("You decide to explore the basement as the box has nothing in it.");
        chriselda(); // Call chriselda function if the box is left alone
    }
}

function chriselda() {
    // This function is for the basement but a ghost finds you.
    let death = prompt("The ghost of Chriselda is chasing you down the basement stairs. Do you fight her off or hide in the washroom? (write 'fight' or 'hide')");
    if (death == "fight") {
        alert("You fought Chriselda's ghost off and won, and escaped the mansion safely. CONGRATULATIONS, YOU SURVIVED");
    } else {
        alert("You get trapped in the washroom and she brutally tortures you. GAME OVER YOU DIED");
    }
}

function startGame() {
    // This function gets the user's name and outputs it in a sentence to welcome them. It also starts off the game with the first decision.
    let name1 = prompt("Enter your name below.");
    alert("Welcome " + name1 + " to Chriselda's Haunted Mansion.");
    let path1 = prompt("Choose your path, will you go into the attic or to the basement? (Reply in lowercase)");
    if (path1 == "attic") {
        attic();
    } else {
        chriselda(); // Call chriselda function directly for the basement path
    }
}

main();
