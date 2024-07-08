// TODO: 
// - [] Add percentage functionality
// - [] Add pos/neg functionality


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
function percentage(num) {
  return num / 100
}
function posneg(num) {
  if (num > 0) {
    return -num
  }
}

let calc = {
  display: '',
  num1: null,
  num2: null,
  operator: null,
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

function operation(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = add(num1, num2);
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
    default:
      alert(`${num1}, ${num2}, or ${operator} are invalid, please try again.`)
  }
  calc = {
    ...calc,
    display: null,
    num1: result,
    num2: null
  }
  refreshDisplay(calc.num1)
  // calc = {
  //   ...calc, num1: result, operator: null
  // }

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
    if (event.target.value === '=') {
      console.log('= clicked')
      console.log(calc)
      console.log('------')
    } else {
      calc.operator = event.target.value;
    }

    if (!calc.num1) {
      calc.num1 = Number(calc.display);
      console.log('num1 assigned')
      console.log(calc)
      console.log('------')
      refreshDisplay(calc.num1);
    } else if (calc.num1) {
      calc.num2 = Number(calc.display);
      console.log('num2 assigned')
      console.log(calc)
      console.log('------')
      operation(calc.num1, calc.num2, calc.operator)
    }

  })
})

const resetButton = document.querySelector(".button.reset");

resetButton.addEventListener("click", () => {
  refreshDisplay(0)
  calc = {
    display: '',
    num1: null,
    num2: null,
    operator: null,
  }
})

const posNegButton = document.querySelector(".button.posNeg");

posNegButton.addEventListener("click", () => {
  let num = posneg(calc.display);
  calc = {
    ...calc, num1: num
  }
  refreshDisplay(num)
})

// Take current display number
// Put negative sign in front
// Update display with negative number
// Update number store with negative number, if it exists
// If no number store, then assign to num1
