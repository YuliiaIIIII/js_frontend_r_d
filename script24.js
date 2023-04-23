// 1. Зробити функції для додавання, віднімання, множення і ділення чисел. В тілі функції обовʼязково добавити перевірку на те, чи є параметр числом

let firstValue = prompt("Введіть перше число");
let secondValue = prompt("Введіть друге число");
function check (){
    if(firstValue == "" || secondValue == ""){
    alert (`Error. Обрахунок неможливий`);
    }
}
check();

function getSum (first, second){
    if(isNaN(first) || isNaN(second)){
        console.log(`First or second value is not a number!`);
    }else{
        let addResult = parseFloat(first) + parseFloat(second);
        console.log(`Результат додавання: ${addResult}`);
    }
}
getSum(firstValue, secondValue);

function getSub (first, second){
    if(isNaN(first) || isNaN(second)){
        console.log(`First or second value is not a number!`);
    }else{
    let subResult = first - second;
    console.log(`Результат віднімання: ${subResult}`);
    }
}
getSub(firstValue, secondValue);

function getMult (first, second){
    if(isNaN(first) || isNaN(second)){
        console.log(`First or second value is not a number!`);
    }else{
    let multipleResult = first * second;
    console.log(`Результат множення: ${multipleResult}`);
    }
}
getMult(firstValue, secondValue);

function getDiv (first, second){
    if(isNaN(first) || isNaN(second)){
        console.log(`First or second value is not a number!`);
    }else{
    let divResult = first / second;
    if(secondValue == 0){
        divResult = `Error. На нуль ділити не можна!`;
    }
    console.log(`Результат ділення: ${divResult}`);
    }
}
getDiv(firstValue, secondValue);


// 2. Зробити функції для пошуку мінімального і максимального числа в масиві. Масив має бути аргументом функції. Для пошуку мінімального та максимального чисел використовуйте різні цикли.
let testArray = [4, "testText", 7, -1, 0, null, 90, 35, true, 15, -8];

function minValueFunc(arr){
let minValue = Infinity;
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number'){
        continue;
    }else{
    if (minValue > arr[i]) {
        minValue = arr[i];
    }
  } 
}
console.log (`Найменше значення: ${minValue}`); 
}
minValueFunc(testArray);

function maxValueFunc(arr){
let maxValue = -Infinity;
for (let j = 0; j < arr.length; j++) {
    if(typeof arr[j] !== 'number'){
        continue;
    }else{
    if (maxValue < arr[j]) {
        maxValue = arr[j];
    }
  } 
}
console.log(`Найбільше значення: ${maxValue}`);
}
maxValueFunc(testArray);