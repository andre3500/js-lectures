
/*

Домашка 2 - ПЕРЕВЕДЕННЯ ВСІХ ЗАДАЧ В ФУНКЦІЇ:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/


function restaraunt(hamburger,friedPotato) {

    if (hamburger > 3 || friedPotato === 1){
      return "Ми поїли";
    }
    else {
         return "Ми йдемо в інше кафе";
    }
    
    } 
    
    let restarauntResult = restaraunt(13,20)
    console.log(restarauntResult)

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

function range(price) {

    if(price >= 1000 && price <= 1900){
      return "Це значення знаходиться в діапазоні ціни";
    }
    else {
         return "Увага! Значення поза доступним діапазоном";
    }
    
    } 
    
    let rangeResult = range(13,20)
    console.log(rangeResult)


/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.

*/


let price = 802;

if (price < 1000 || price > 1900){
    console.log('це значення поза діапазоном')
}
else {
    console.log('значення в діапазоні')
}



let price = 180;

if (!(price >= 1000 && price <= 1900)) { 
    console.log('out of the price range')
}
else {
    console.log('in a price range')
}



/*

4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let num = 0;

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

let a = 5475;
let b = 46;
let c = 6346;

if (a > b && a < c || a < b && a > c) {console.log ("a is medium")}
else if (b > a && b < c || b < a && b > c) {console.log ("b is medium")}
else {console.log("c is medium") }                                      

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

let number = 8;

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
    console.log('not a weekday')
}


/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/


let result;

const operator = '*';

const number1 = 46;
const number2 = 0;

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

let str = 'JavaScript S0ftware Development';

let noVowels = str.replace(/[aeiou]/gi, '');

console.log(noVowels); 


/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

//meters 

let metr = 3838;
let kilometr = metr / 1000;
let arr = [metr, kilometr];
let result = "";

for(let i = 0; i < arr.length; i++){
 let number = arr[i];
 let ending = "";
 if (number === Math. round (number)) {
    if (number % 10 === 0 || (number % 10 >= 5 && number % 10 <= 19)) {
      ending = "ів"
      
    } else if (number % 10 === 1) {
      ending = ""
    } else if (number % 10 >= 2 && number % 10 <= 4){
      ending = "и"
    }
}
else {
      ending = "а"
}

if(i === 0){
   result = (`${metr} метр${ending} = `)
}
else{result = `${result} ${kilometr} кілометр${ending}`
}
}

console.log(result)