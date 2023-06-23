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



     /*switchcase & function for Fruits
     */
    
function fruitColor(str) {
 
  switch(str) {
   case 'apple' : return 'green';
     break;
   case 'banana' : return 'yellow';
     break;
   case 'kiwi' : return 'green';
     break;
   case 'plum' : return 'red';
     break;
  }
 }
 let fruitColorResult = fruitColor('apple');
 console.log(fruitColorResult)