
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

let hamburger = 10;
let friedPotato = 4;


if(hamburger > 3 && friedPotato === 1)
{
     console.log('Ми поїли')
}
else {
     console.log('Ми йдемо в інше кафе')  // вирішив реалізувати через else щоб покрити 2 умови. 
}



/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

let price = 1400;

if(price >= 1000 && price <= 1900){
    console.log('це значення знаходиться в діапазоні ціни')
}

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.

*/


let price = 100;

if(price >= 1000 && price <= 1900){
    console.log('це значення знаходиться в діапазоні ціни')
}
else {
    console.log('Увага! Значення поза доступним діапазоном')
}



let price = 100;

if(price != 1000 && price != 1900){
    console.log('це значення знаходиться в діапазоні ціни')
}
else {
    console.log('Помилка! Значення поза доступним діапазоном')
}

/*

4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let num = 53;

if(num == 1){
    console.log('зима')
} else if (num == 2) {
    console.log('весна')
} else if (num == 3) {
    console.log('літо')
} else if (num == 4) {
    console.log('осінь')
} else {
    console.log('не сезон')
}


/*

5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/




/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

let number = 39;

switch(number){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7: 
    console.log('Sunday')
    break;
    default: 
    console.log('unknown value')
}

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/


let result;

const operator = '*';

const number1 = 6;
const number2 = 9;

switch(operator) {
  case '+':
  result = number1 + number2;
  console.log(`${number1} + ${number2} = ${result}`);
  break;

  case '-':
  result = number1 - number2;
  console.log(`${number1} - ${number2} = ${result}`);
  break;

  case '*':
  result = number1 * number2;
  console.log(`${number1} * ${number2} = ${result}`);
  break;

  case '/':
  result = number1 / number2;
  console.log(`${number1} / ${number2} = ${result}`);
  break;

  default:
  console.log('Invalid operator');
  break;
}

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

const str = 'JavaScript S0ftware Development';

const noVowels = str.replace(/[aeiou]/gi, '');

console.log(noVowels); 


/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/
