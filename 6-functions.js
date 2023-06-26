let a = 5;
let b = 3;
let c;

//...

c = a + b;
console.log(c)

//...

a = 15;
b = 13;

console.log(c)

// ...

function sum(a, b){
    let c = a + b;
    console.log(c)
}

// sum(15, 13)
// sum(1, 2)
// sum(144444, 24444444)

let sumResult = sum(1, 2);
console.log(sumResult)

function someFn(a, b){
    let c = a + b;

    let resultArr = [a, b, c] 
    return resultArr;
}

let sumResult2 = someFn(1, 2);

console.log(sumResult2[2]);

//console.log(someFn(10, 20))

// anonim fn
function (a, b){
    let c = a + b;

    return с;
}

const anonimFn = function (a, b){
    let c = a + b;

    return c;
}

console.log(anonimFn(2, 4))

// arrow fn
() => {}

const arrowFn = (a, b) => {
    let c = a + b;

    return c;
}

console.log(arrowFn(3, 4))


const arrowFunc = (a, b = 2) => {
    return a * b
}

console.log(arrowFunc(3, 5))


const playWithReturnFunc = () => {
    for(let i = 0; i < 10; i++){
        console.log(i);

        if(i === 6){
            return `Iterator = ${i}`
        }
    }
}

console.log(playWithReturnFunc());


console.log(Date())

const myRequestWithDate = (field1, createdAt = Date()) => {

    //...

    let requestBody = {
        someKey1: 1,
        someKey2: 2,
        timestamp: ''
    }

    requestBody.someKey1 = field1;
    requestBody.timestamp = createdAt;

    // send request

    return requestBody;
}

console.log(myRequestWithDate(123, 3123123123123123)) //requestBody

let myRequestWithDateResult = myRequestWithDate(123, 3123123123123123)
// dd/mm/yyyy

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;

console.log(formattedToday)

//-------
let yourDate = new Date()
console.log(yourDate.toISOString().split('T')[0])




const arrowFunc1 = (a, b) => {
    return a * b
}

const arrowFunc2 = (a, b) => {
    console.log(a * b)
}

// console.log(arrowFunc1(2, 2))
// arrowFunc2(3, 3)

let fnVar1 = arrowFunc1(2, 2)
let fnVar2 = arrowFunc2(3, 3)

console.log(`fnVar1 = ${fnVar1}`)
console.log(`fnVar2 = ${fnVar2}`)



const submitButton = () => {
    return cy.get('.className')
}

const getValueFromElement = (locator) => {
    return cy.get(`${locator}`).getTextFromElement();
}

it('Click on submit button', () => {
    cy.get('.className').click()
    cy.get('.className').click()
    cy.get('.className').click()
    cy.get('.className').click()
    cy.get('.className').click()
    cy.get('.className').click()

    submitButton().click();
    let textFromElement = getValueFromElement('.locatorOfElement');
})


function someFunc(){
    console.log('Привіт')
}

setTimeout(someFunc, 5000)
console.log('123')



function first(){
    setTimeout(function (){
        console.log('First output')
    }, 5000)
}

function second() {
    console.log('Second output')
}

first();
second();


function someFuncWithCallback(param1, callbackFunc){
    console.log(`Here is my param: ${param1}`);

    callbackFunc(param1);
}

function sum(a, b = 2){
    return a + b;
}

someFuncWithCallback(3, sum);

someFuncWithCallback('value1', function(){
    console.log('Text from callback')
})



function it(testDescription, testActions){
    console.log(`${testDescription}`)

    testActions();
}

it('Click on submit button', () => {
    cy.get('.className').click()

    cy.get('.className', {timeout: 5000}).click()

    console.log('Click on some element')
})



