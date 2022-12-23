let question = prompt(
  "What mathematical operation do you want to do? (add, sub, mult, div)",
  ""
);
let firstNum = +prompt("Input first number", "");
let secondNum = +prompt("Input second number", "");

let addition = firstNum + "+" + secondNum + "=" + (firstNum + secondNum);
let subtraction = firstNum + "-" + secondNum + "=" + (firstNum - secondNum);
let multiplication = firstNum + "*" + secondNum + "=" + firstNum * secondNum;
let division = firstNum + "/" + secondNum + "=" + firstNum / secondNum;

switch (question) {
  case "add": {
    alert(addition);
    break;
  }
  case "sub": {
    alert(subtraction);
    break;
  }
  case "mult": {
    alert(multiplication);
    break;
  }
  case "div": {
    alert(division);
    break;
  }
}
