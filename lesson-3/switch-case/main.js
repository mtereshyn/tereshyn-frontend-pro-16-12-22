let numOrStr = prompt("input number or string");
console.log(numOrStr); //typeof is always a string, so the number is not a number

switch (true) {
  case numOrStr === null:
    console.log("Cancelled the entry");
    break;
  case numOrStr === "":
    console.log("Prompt is empty");
    break;
  case numOrStr:
    console.log(numOrStr);
    break;
}
