#! usr/bin/env node
import inquirer from "inquirer";

console.log("\n\Welcome to Jareer shafiq khan - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() *3 + 1);

const answer = await inquirer.prompt([
     {
         name:"enterguessedNumber",
         type: "number", 
         massage:"Enter your guess number(Number Limit from 1 till 5)",        
     },
]);

if(answer.userGuessedNumber === randomNumber){
   console.log("Congratulation ! You guess a correct number.")
}
else{
   console.log ("~Sorry you guessed a wrong number write number is ${randomNumber}~") 
} 