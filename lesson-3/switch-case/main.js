let numOrStr = prompt("input number or string");
console.log(numOrStr); //typeof is always a string, so the number is not a number

switch (true) {
  case numOrStr === null:
    console.log("ви скасували");
    break;
  case numOrStr.trim() === "":
    console.log("Empty String");
    break;
  case isNaN(+numOrStr):
    console.log(" number is Ba_NaN");
    break;
  case numOrStr:
    console.log("OK!");
    break;
}
