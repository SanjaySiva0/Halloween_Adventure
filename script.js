function main() {
    //This is the start of the game.
    alert("Welcome to Chriselda's Haunted Mansion where every decsion you make decides your fate.")
    startGame();
}
function attic() {
    //This is the choice to open the box or leave it alone, this funtion is for the attic and is crucial for survival. o
    let boxanswer = prompt("Welcome to the attic! You see an old box, will you open it(1) or leave it(2) be?")
    if (boxanswer == 1) {
        alert("A bunch of bats fly out of the box and you die a slow and horrible death from rabies. GAME OVER")
    } else {
        alert("You decide to explore the basment as the box has nothing in it.")
        chriselda();
    }
}

function chriselda() {
    //This function is for the basement but a ghost finds you. in this you can die by going to the washroom as seen in the else or survive by fighting as seen in the if
    let chriseldaAnswer = prompt("The ghost of Chriselda is chasing you down the basement stairs. Do you fight her off or hide in the washroom? (write fight or hide if you want to hide" )
    if (chriseldaAnswer == "fight"){
        alert("You fought the Chriselda's ghost off and won, and escaped the mansion safely. CONGRATULATIONS, YOU SURVIVED")
    } else{
        alert("You get trapped in the washroom and she brutally tortures you. GAME OVER YOU DIED")
    }
}
function startGame() {
    //Ths function gets the users name and uputs it in a sentence to welcome them. it alsso starts off the game with the first dcisonn. 
    let name1 = prompt("enter your name below.")
    alert("Welcome "+ name1 +" to Chriselda's Haunted Mansion.")
    let path1 = prompt("choose your path, will you go into the attic or to the basement.(Reply in lowercase)")
    if (path1 == "attic") {
        attic();
    } else {
        chriselda();
    }
}

main();
