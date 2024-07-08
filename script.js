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
  return -num
}

let calc = {
  display: '',
  calcArray: [],
  operator: null,
  result: null
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
      if (num2 === 0) {
        alert("You'll create a black hole!!");
        return NaN;
      }
      result = divide(num1, num2);
      break;
    default:
      alert(`${num1}, ${num2}, or ${operator} are invalid, please try again.`)
  }

  return result

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
    calc.calcArray.push(calc.display);
    calc.display = ''

    if (calc.calcArray.length < 2) {
      calc.operator = event.target.value
    }

    if (calc.calcArray.length == 2 && event.target.value != '=') {
      calc.result = operation(Number(calc.calcArray[0]), Number(calc.calcArray[1]), calc.operator)
      if (isNaN(calc.result)) {
        calc.calcArray = []
        calc.result = null
        refreshDisplay(0)
        console.log(calc)
      } else {
        refreshDisplay(calc.result);
        calc.calcArray = []
        calc.calcArray.push(calc.result)
        calc.operator = event.target.value
        console.log(calc)
      }
    }

    if (calc.calcArray.length == 2 && event.target.value === '=') {
      calc.result = operation(Number(calc.calcArray[0]), Number(calc.calcArray[1]), calc.operator)
      if (isNaN(calc.result)) {
        calc.calcArray = []
        calc.result = null
        refreshDisplay(0);
        console.log(calc)
      } else {
        refreshDisplay(calc.result)
        calc.calcArray = []
        calc.calcArray.push(calc.result)
        console.log(calc)
      }
      // calc.operator = null;
    }

  })
})

const resetButton = document.querySelector(".button.reset");

resetButton.addEventListener("click", () => {
  refreshDisplay(0)
  calc = {
    display: '',
    calcArray: [],
    operator: null,
    result: null,
  }
})

const posNegButton = document.querySelector(".button.posNeg");

posNegButton.addEventListener("click", () => {
  if (!calc.display) {
    let num = posneg(calc.calcArray[0]);
    calc.display = num
    calc.calcArray = []
    displayNumber(calc.display)
  } else {
    let num = posneg(calc.display);
    calc.display = num
    displayNumber(calc.display)
  }

})

const pctButton = document.querySelector(".button.pct")
pctButton.addEventListener("click", () => {
  if (!calc.display) {
    let num = percentage(calc.calcArray[0]);
    calc.display = num
    calc.calcArray = []
    displayNumber(calc.display)
  } else {
    let num = percentage(calc.display);
    calc.display = num;
    displayNumber(calc.display);
  }
})

