
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


function range(price) {

    if(price >= 1000 && price <= 1900){     //(!(price >= 1000 && price <= 1900)) - другий варіант з НЕ 
      return 'це значення поза діапазоном';
    }
    else {
         return 'значення в діапазоні';
    }
    
    } 
    
    let rangeResult = range(13,20)
    console.log(rangeResult)

/*

4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

function season(num) {
  
    if(num == 1){
        return 'зима';
    } else if (num == 2) {
        return 'весна';
    } else if (num == 3) {
        return 'літо';
    } else if (num == 4) {
        return 'осінь';
    } else {
        return 'не сезон';
    }
}
    let seasonResult = season([0]);
    console.log(seasonResult)

/*

5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/


function equals(a,b,c) { 
  
if (a > b && a < c || a < b && a > c) {return "a is medium"}
else if (b > a && b < c || b < a && b > c) {return "b is medium"}
else {return"c is medium" }                                      
}

    let equalsResult = equals(1,64,3);
    console.log(equalsResult)

    
/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

function weekday(num) {

    switch(num){
        case 1: return'Monday';
          break;
        case 2: return'Tuesday';
          break;
        case 3: return'Wednesday';
           break; 
        case 4: return'Thursday';
           break;
        case 5: return'Friday';
           break;
        case 6: return'Saturday';
           break;  
        case 7: return'Sunday';
           break;
        default: return 'not a weekday';
      }
    }
        let weekdayResult = weekday(47);
        console.log(weekdayResult)

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

const operator = ('*');
const number1 = ('4');
const number2 = ('6');

function calculation(operator){

switch(operator) {
  case '+':
  result = a + b;
  return'${a} + ${b2} = ${result}';
  break;

  case '-': result = a - b;
  return '${a} - ${b} = ${result}';
  break;

  case '*':
  result = a * b;
  return '${a} * ${b} = ${result}';
  break;

  case '/':
  result = a / b;
  return 'return${a} / ${b} = ${result}';
  break;

  default:
  return 'Invalid operator';
  break;
}

}

console.log(`${number1} ${operator} ${number2} = ${result}`)  // намудрив з виводом консолі - буду вдячний за допомогу 

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

const removeVowels = function(string) {
    return string.replace(/[aeiou]/gi, '')
  }
  console.log(removeVowels('happy'));
  


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