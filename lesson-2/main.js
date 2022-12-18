let firstNum = +prompt("Input first number", "");
let secondNumb = +prompt("Input second number", "");
let amount = firstNum + "+" + secondNumb + "=" + (firstNum + secondNumb) + "\n";
let difference =
  firstNum + "-" + secondNumb + "=" + (firstNum - secondNumb) + "\n";
let multiply = firstNum + "*" + secondNumb + "=" + firstNum * secondNumb + "\n";
let division = firstNum + "/" + secondNumb + "=" + firstNum / secondNumb + "\n";

alert(amount + difference + multiply + division);
