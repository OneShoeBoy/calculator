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
  operator: null,
}

function operation(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = add(num1, num2);
      console.log(result);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case 'x':
      result = multiply(num1, num2);
      break;
    case '÷':
      result = divide(num1, num2);
      break;
    case '=':
      console.log(result)
    default:
      alert(`${num1}, ${num2}, or ${operator} are invalid, please try again.`)
  }
  calc = {
    display: result,
    num1: null,
    num2: null,
    operator: null
  }
  return result;

}


function refreshDisplay(numToDisplay) {
  const display = document.querySelector("#display")
  display.textContent = numToDisplay;
  calc.display = '';
}

function displayNumber(num) {
  const display = document.querySelector("#display")
  display.textContent = num;
}

const numberButtons = document.querySelectorAll(".button.number");
const symbolButtons = document.querySelectorAll(".button.symbol");

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calc.display += event.target.value;
    displayNumber(calc.display);
  })
})

symbolButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calc.operator = event.target.value;
    if (!calc.num1) {
      calc.num1 = Number(calc.display);
      refreshDisplay(calc.num1);
    } else if (calc.num1) {
      calc.num2 = Number(calc.display);
      refreshDisplay(calc.num2);
    }


  })
})


//
// const buttons = document.querySelectorAll(".button");
//
//
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//
//     calc.display += event.target.value;
//     displayNumber(calc.display);
//
//   });
// });

