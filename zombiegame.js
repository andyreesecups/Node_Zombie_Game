// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 
// =============================================================================
var inquirer = require("inquirer");
var userHealth = 70;
var zombieHealth = 15;

function game() {


    inquirer.prompt([{
            type: "input",
            message: "Choose a number between 1 and 5",
            name: "userChoice"
        }

    ]).then(function(user) {
        var randomNumber = Math.floor(Math.random() * 5) + 1;
        var zombieNumber = Math.floor(Math.random() * 5) + 1;


        // if the user input is not equal to the random zombie number and userHealth isn't 0 then...
        if (parseInt(user.userChoice) !== zombieNumber && userHealth !== 0) {
            console.log("The zombies have gotten you. Your health has decreased by: " + randomNumber);
            // Decrease user health by the random number
            userHealth -= randomNumber;
            console.log(userHealth)
            game();
            // If user choice is equal to random zombie number and zombieHealth isn't 0 then...
        } else if (parseInt(user.userChoice) === zombieNumber && zombieHealth !== 0) {
            console.log("You have defeated the zombies. The zombies health has decreased by: " + randomNumber);
            // decrease zombieHealth by random number
            zombieHealth -= randomNumber;
            console.log(zombieHealth);
            game();



        } else {
            console.log("Game Over!");
        }
    });
}
game();
