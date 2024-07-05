function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}


let calc = {
  display: '',
  num1: null,
  num2: null,
  operator: null
}

function operation(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      alert(`${num1}, ${num2}, or ${operator} are invalid, please try again.`)
  }
  return result;
}



function displayNumber(num) {
  const display = document.querySelector("#display")
  display.textContent = num;
}

const buttons = document.querySelectorAll(".button");


buttons.forEach((button) => {
  button.addEventListener("click", (event) => {

    calc.display += event.target.value;
    displayNumber(calc.display);

  });
});

