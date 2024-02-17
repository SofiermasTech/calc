import '../pages/index.css';

// import '../scripts/script_1.js';
// import '../scripts/script_2.js';

// первый
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






// второй калькулятор
let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation
let finish = false; // result

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const symbol = ['-', '+', '*', '/'];

// экран с результатом
const screen = document.querySelector('.screen__result');

function clearAll() {
   a = '';
   b = '';
   sign = '';
   finish = false;
   screen.textContent = 0;
}

document.getElementById('ac').onclick = clearAll();

document.querySelector('.buttons').onclick = (evt) => {
   // нажата не кнопка
   if (!evt.target.classList.contains('buttons__circle')) return;
   // нажата ас
   if (evt.target.classList.contains('ac')) {
      clearAll();
      return;
   };

   screen.textContent = 0;
   // получение нажатой кнопки
   const key = evt.target.textContent;

   // нажата клавиша из numbers
   if (numbers.includes(key)) {
      if (b === '' && sign === '') {
         a += key;
         screen.textContent = a;
      } else if (a !== '' && b !== '' && finish) {
         b = key;
         finish = false;
         screen.textContent = b;
      } else {
         b += key;
         screen.textContent = b;
      }
      console.log(a, b, sign);
      return;
   }

   // нажата клавиша из symbol
   if (symbol.includes(key)) {
      if (sign !== '') {
         sign = key;
         screen.textContent = sign;
         console.log(a, b, sign);
      } else {
         sign += key;
         screen.textContent = sign;
         console.log(a, b, sign);
         return;
      }
   }

   // нажата клавиша =
   if (key === '=') {
      if (b === '') b = a;
      switch (sign) {
         case '+':
            a = (+a) + (+b);
            break;
         case '-':
            a = a - b;
            break;
         case '*':
            a = a * b;
            break;
         case '/':
            if (b === '0') {
               screen.textContent = 'Ошибка';
               a = '';
               b = '';
               sign = '';
               return;
            }
            a = a / b;
            break;
      }
      finish = true;
      screen.textContent = a;
      console.log(a, b, sign);

   }
}