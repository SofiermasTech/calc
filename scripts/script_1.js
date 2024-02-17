const number1 = document.getElementById('input1');
const number2 = document.getElementById('input2');
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');
const btnSubmit = document.getElementById('submit');
const btnMultiply = document.getElementById('multiply');
const btnDivide = document.getElementById('divide');
const result = document.getElementById('result');
let action = '+';

btnPlus.onclick = function clickPlus() {
   action = '+'
}

btnMinus.onclick = function clickMinus() {
   action = '-'
}

btnMultiply.onclick = function clickMultiply() {
   action = '*'
}

btnDivide.onclick = function clickDivide() {
   action = '/'
}
//console.log(submitNumber());

function colorResult(sum) {
   if (sum < 0) {
      result.style.color = 'red';
   } else {
      result.style.color = 'green';
   }
   result.textContent = sum;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
   const num1 = Number(inp1.value);
   const num2 = Number(inp2.value);
   if (actionSymbol == '+') {
      return num1 + num2;
   } else if (actionSymbol == '-') {
      return num1 - num2;
   } else if (actionSymbol == '*') {
      return num1 * num2;
   } else if (actionSymbol == '/') {
      return num1 / num2;
   }
}

/*
btnSubmit.onclick = function submitNumber() {
   if (action == '+') {
      const sum = Number(number1.value) + Number(number2.value);
      //result.textContent = sum;
      colorResult(sum);
   } else {
      const sum = Number(number1.value) - Number(number2.value);
      //result.textContent = sum;
      colorResult(sum);
   }
}
*/

btnSubmit.onclick = function submitNumber() {
   const result = computeNumbersWithAction(number1, number2, action)
   colorResult(result);
}


