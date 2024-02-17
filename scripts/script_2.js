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