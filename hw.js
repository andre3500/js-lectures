
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

let price = 1000;

if(price >= 1000 && price <= 1900){
    console.log('це значення знаходиться в діапазоні ціни')
}
else {
    console.log('Увага! Значення поза доступним діапазоном')
}

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
else {console.log("c is medium") }                                      // це абсолютно не те рішення що ви хотіли, але я вирішив надати хоч щось замість пустого місця. Я нажаль так і не зрозумів поставленої задачі, тому знайшов формулу і імплементував її в код

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

 


const kilometers = 0.001;
const factor = 1000;
const meters = kilometers * factor;
const kil ="кілометрів";
const met ="метрів"
   
   if(kilometers % 10 == 1){
     let kil = "кілометр";
     console.log(`${kilometers} ${kil} дорівнює ${meters} ${met}. `) 
   }
   
   else if(kilometers >= 11 && kilometers <= 14) {
     let kil = "кілометрів";
     console.log(`${kilometers} ${kil} дорівнює ${meters} ${met}. `)
   }
   else if(kilometers % 10 == 2 || kilometers % 10 == 3 || kilometers % 10 == 4 && kilometers % 100 == 12 || kilometers % 100 == 13 || kilometers % 100 == 14){
     let kil = "кілометри";
     console.log(`${kilometers} ${kil} дорівнює ${meters} ${met}. `) 
   }
   
        else if(kilometers >= 0.001 && kilometers <= 0.49) {
     let kil = "кілометра";
     console.log(`${kilometers} ${kil} дорівнює ${meters} ${met}. `)
   } 
   
   else if(kilometers === 0.001) {
     let met = "метр";
     console.log(`${kilometers} ${kil} дорівнює ${meters} ${met}. `)// чогось це працює окремо, але не працює разом. Без цього задача не можу бути виконана повноцінно
   } 
   
   else{
   console.log(`${kilometers} ${kil} дорівнює ${meters} ${met}. `)
   }
  // не зміг нагуглити рішення як додати правило десятичних цифр до інших значень. Наприклад щоб значення 0.345 однаково працювало з 12.345 і 985.345 
  // 
    

  const meters = 21841;
  const factor = 1000;
  const kilometers = meters / factor;
  const kil ="кілометрів";
  const met ="метрів"
     
     if(kilometers % 10 == 1 || meters % 10 == 1){
       let met = "метр";
       console.log(`${meters} ${met} дорівнює ${kilometers} ${kil}. `) // так само не знайшов як це зробити: якщо писати 19673 - результат буде 19.673 к-метрІВ і це ок. А якщо написати 21673 - буде 21.~~ кілометрІВ - що не вірно. 
     }
     
     else if(kilometers >= 11 && kilometers <= 14 || meters >= 11 && meters <= 14) {
       let kil = "кілометрів";
       let met = "метрів";
       console.log(`${meters} ${met} дорівнює ${kilometers} ${kil}. `)
     }
     else if(kilometers % 10 == 2 || kilometers % 10 == 3 || kilometers % 10 == 4 && kilometers % 100 == 12 || kilometers % 100 == 13 || kilometers % 100 == 14){
       let kil = "кілометри";
       let met = "метри";
       cconsole.log(`${meters} ${met} дорівнює ${kilometers} ${kil}. `)
     }
     
          else if(kilometers >= 0.001 && kilometers <= 0.49) {
       let kil = "кілометра";
       let met = "метра";
       console.log(`${meters} ${met} дорівнює ${kilometers} ${kil}. `)
     } 
     
     else if(kilometers === 0.001 ) {
       let met = "метр";
       console.log(`${meters} ${met} дорівнює ${kilometers} ${kil}. `)
     } 
     
     else{
        console.log(`${meters} ${met} дорівнює ${kilometers} ${kil}. `)
     }


     // задача реалізована не повністю, бо я нажаль так і не зрозумів як вирішити питання, які мене блокують