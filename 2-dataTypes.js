/**
 * Прості або примітивні:
 * - Числа
 * - Рядки (текст)
 * - Логічний тип
 * - null
 * - undefined
 * - Symbol
 * - BigIng
 * 
 * Обʼєкти:
 * Спеціальні обʼєкти (або Глобальні):
 * - Масиви
 * - Функції
 * - Обʼєкт дати
 * - Регулярні вирази
 * - Помилки
 * Звичайні обʼєкти:
 * - Обʼєкт {}
 */

let number = 5;
let floatNumber = 5.5;

console.log(4/0); //Infinity
console.log(-4/0); //-Infinity

console.log('string'*3); //NaN / Not a Number

let isExist = true; // false

console.log(someVar);

let value = null;
console.log(value);

let udef;
console.log(udef);

let obj = {};

let person = {
    name: 'Dmytro',
    age: 28
}

// let person1 = new Object();
// console.log(person1)
// person1.name = "Fred";
// person1.age = 42;
// console.log(person1)

console.log(person.name)
console.log(person.age)


let arr = []; // 1, 2, 3, 4

let arr1 = ['text', 6, {}, []]
console.log(arr1)
console.log(arr1[0]) // перший елемент масива
console.log(arr1[1])  // другий елемент масива

let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3};

console.log(numArr[0])
console.log(numObj.a)


let someArr = [1, 2, 3, 4]
let someArrObj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}
console.log(someArr[0])
console.log(someArrObj[0])

