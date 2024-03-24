#! usr/bin/env node
import inquirer from "inquirer";
let hum = await inquirer.prompt([
    { name: "firstNumber", type: "number", message: "Enter first Number" },
    { name: "secondNumber", type: "number", message: "Enter second Number" },
    {
        message: "Select one operator to perform operation",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (hum.operator === "Addition") {
    console.log(hum.firstNumber + hum.secondNumber);
}
else if (hum.operator === "Subtraction") {
    console.log(hum.firstNumber - hum.secondNumber);
}
else if (hum.operator === "Multiplication") {
    console.log(hum.firstNumber * hum.secondNumber);
}
else if (hum.operator === "Division") {
    console.log(hum.firstNumber / hum.secondNumber);
}
else {
    console.log("Please Enter A Valid Number");
}
