console.log('Hello ' + 'world')

console.log(2 + 2)

console.log('2' + 2)

console.log(2 + + '2')


let incr = 10;
let decr = 10;

console.log(incr)
console.log(decr)

incr++;
decr--;

console.log(incr)
console.log(decr)

++incr;
--decr;

console.log(incr)
console.log(decr)



let incr1 = 10;
let decr1 = 10;

console.log(incr1++)
console.log(decr1--)

console.log(++incr1)
console.log(--decr1)


console.log(5 < 2)
console.log(5 > 2)
console.log(2*4 == 8) // error

console.log(2*4 == 8)
console.log(2*4 == '8')

console.log(2*4 === '8')
console.log(2*4 === 8)

console.log("a" != "b")
console.log("a" !== "b")

console.log(2*4 != '9')
console.log(2*4 !== '8')


let isChecked = true;
let isClosed = false;

// console.log(isChecked && isClosed) // логічне І
// console.log(isChecked || isClosed) // логічне АБО

console.log(isChecked && !isClosed) // логічне І
console.log(!isChecked || isClosed) // логічне АБО



// Я хочу купити картоплю та гамбургер. Якщо обидва товари є в наявності, я їх купую і буду ситим.

let hamburger = false;
let fries = true;

if(hamburger&&fries){
    console.log('я ситий')
}

let hamburger1 = 1;
let fries1 = 0; // null, undefined, "", NaN

if(hamburger1&&fries1){
    console.log('я ситий')
}


//Я хочу купити або 3 гамбургера і колу або 2 порції нагетсів і 2 порції картоплі фрі.
// Якщо щось з цього є, я це купую і буду ситим.

let hamburgers = 3;
let cola = 2;
let nuggets = 2;
let friesPotatos = 1;


if(hamburgers > 2 && cola || nuggets > 1 && friesPotatos > 1){
    console.log('всі поїли')
}


