function calculate() {
  let num1 = +prompt("Enter First Number:");
  let num2 = +prompt("Enter Second Number:");

  let result;
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Invalid Number.");
  }
  else{
  let operator = prompt("Enter Operator: \n--> +\n--> -\n--> *\n--> /");

    if (operator === "+") {
      result = num1 + num2;
      alert(`The sum is ${result}`);
    } else if (operator === "-") {
      result = num1 - num2;
      alert(`The difference is ${result}`);
    } else if (operator === "*") {
      result = num1 * num2;
      alert(`The product is ${result}`);
    } else if (operator === "/") {
      if (num2 !== 0) {
        result = num1 / num2;
        alert(`The quotient is ${result}`);
      } else {
        alert("Division by zero is not allowed.");
      }
    } else if (operator === "%") {
      result = num1 % num2;
      alert(`The remainder is ${result}`);
    } else {
      alert("Invalid Operator");
    }
  }
}

function operations() {
  let operations = prompt(
    "Enter Operations \n--> 1. Power\n--> 2. Sqr-Root\n--> 3. %age"
  );

  if (operations === "Power" || operations === "1") {
    let number = +prompt("Enter a number");
    alert(`The power of ${number} is ` + number * number);
  } else if (operations === "Sqr-Root" || operations === "2") {
    let number = +prompt("Enter a number");
    alert(`The Square Root of ${number} is ` + Math.sqrt(number));
  } else if (operations === "%age" || operations === "3") {
    let num1 = +prompt("Enter acquired:");
    let num2 = +prompt("Enter total:");

    let percent = ((num1 / num2) * 100).toFixed(1) + "%";
    alert(`The percentage is ${percent}`);
  } else {
    alert("Invalid Operations");
  }
}
