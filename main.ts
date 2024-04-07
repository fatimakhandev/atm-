import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 12345;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
console.log(pinAnswer.pin);

if (pinAnswer.pin === myPin) {
  console.log("correct pin code!!!!");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  console.log(operationAnswer);
  if (operationAnswer.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      }
    ])
    
    //=, -= ,+=
    myBalance -= amountAnswer.amount;
    
    console.log("your remaining balance is:" + myBalance);
  } 
else if (operationAnswer.operation === "check balance") {
    console.log("your balance is:" + myBalance);
  }
} else {
  console.log("Incorrect pin number");
}
