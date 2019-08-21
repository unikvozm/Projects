var formula = "";
var display = "0";
var openParNum = 0; // how many parentheses are open
const FORMULA = document.getElementById("formula");
const DISPLAY = document.getElementById("display");

const isOperator = input => {
  return "+-*/".indexOf(input) !== -1 ? true : false;
};

function input(x) {
  if (display === "0") {
    // starting a new calculation
    if (isOperator(x) || x === ".") {
      formula = "0" + x;
      display = "0" + x;
    } else if (x !== ")") {
      formula = x;
      display = x;
    }
  } else {
    // continuing the calculation
    let prev = formula[formula.length - 1]; //the previous input
    let secondLast = formula[formula.length - 2]; // the second last input
    if (prev === "=") {
      if (isOperator(x)) {
        formula = display;
      } else if (x !== ")") {
        formula = "";
        if (x === ".") {
          display = "0" + x;
          formula = "0" + x;
        } else {
          display = x;
        }
      }
    }
    if (isOperator(x)) {
      if (prev !== "(" || x === "-") {
        if (prev === "=") {
          formula = display;
        }
        display = x;
        if (isOperator(prev) && !isOperator(secondLast)) {
          if (x !== "-") {
            formula = formula.slice(0, formula.length - 1) + x;
          } else {
            if (prev === "-") {
              formula = formula.slice(0, formula.length - 1) + x;
            } else {
              formula += x;
            }
          }
        } else if (isOperator(prev) && isOperator(secondLast)) {
          formula = formula.slice(0, formula.length - 2) + x;
        } else {
          formula += x;
        }
      }
    } else if (x === ".") {
      if (display.indexOf(".") === -1 && !isOperator(display)) {
        formula += x;
        display += x;
      } else if (display.indexOf(".") === -1 && isOperator(display)) {
        formula += "0" + x;
        display = "0" + x;
      }
    } else if (x === "(") {
      openParNum++;
      display = x;
      if (!isOperator(prev) && prev !== "(" && prev !== "=") {
        formula += "*" + x;
      } else {
        formula += x;
      }
    } else if (x === ")") {
      if (openParNum !== 0 && prev !== "(" && !isOperator(prev)) {
        display = x;
        formula += x;
        openParNum--;
      }
    } else {
      formula += x;
      if (isOperator(prev)) {
        display = x;
      } else {
        display += x;
      }
    }
  }
  FORMULA.innerHTML = formula;
  DISPLAY.innerHTML = display;
}

function clearLast() {
  if (formula !== "" && display !== "" && !isOperator(display)) {
    formula = formula.slice(0, formula.length - 1);
    display = display.slice(0, display.length - 1);
  }
  FORMULA.innerHTML = formula;
  DISPLAY.innerHTML = display;
}

function clearAll() {
  formula = "_";
  display = "0";
  FORMULA.innerHTML = formula;
  DISPLAY.innerHTML = display;
}

function calculate() {
  if (
    !isOperator(display) &&
    formula !== "" &&
    formula[formula.length - 1] !== "=" &&
    eval(formula) !== NaN
  ) {
    display = eval(formula).toString();
    DISPLAY.innerHTML = display;
    formula += "=";
    FORMULA.innerHTML = formula;
  } else {
    DISPLAY.innerHTML = "Invalid input";
  }
}
