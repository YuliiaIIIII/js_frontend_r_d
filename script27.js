// 1. Модифікувати функції з завдання 24 так, щоб результат дії цих функцій показувався на сторінці замість діалогового вікна.
// 2. Якщо результат операції з завдання 1 буде відʼємним – показувати його червоним кольором, якщо додатнім – зеленим.

let result = document.querySelector(".result");
result.setAttribute('style','font-size: 20px; text-align: center');
let firstValue = prompt("Введіть перше число");
let secondValue = prompt("Введіть друге число");

function setColor(value,spanElement){
    if(value < 0){
        spanElement.setAttribute('style','color: red');
    }else if(value === 0){
        spanElement.setAttribute('style','color: black');
    }else{
        spanElement.setAttribute('style','color: green');
    }
}

function append(pElement, spanEl, resultEl){
    spanEl.textContent = (`${resultEl}`);
    setColor(resultEl,spanEl);
    pElement.appendChild(spanEl); 
}

function getSum (first, second){
    let addResult = parseFloat(first) + parseFloat(second);
    let sumP = document.createElement("p");
    sumP.textContent = (`Результат додавання: `);
    result.appendChild(sumP);
    let sumSpan = document.createElement("span");
    append(sumP, sumSpan, addResult);
}

function getSub (first, second){
    let subResult = first - second;
    let subP = document.createElement("p");
    subP.textContent = (`Результат віднімання: `);
    result.appendChild(subP);
    let subSpan = document.createElement("span");
    append(subP, subSpan, subResult);
}

function getMult (first, second){
    let multipleResult = first * second;
    let multP = document.createElement("p");
    multP.textContent = (`Результат множення: `);
    result.appendChild(multP);
    let multSpan = document.createElement("span");
    append(multP, multSpan, multipleResult);
}

function getDiv (first, second){
    let divResult = (first / second).toFixed(4);
        if(secondValue == 0){
            divResult = `Error. На нуль ділити не можна!`;
        }
    let divP = document.createElement("p");
    divP.textContent = (`Результат ділення: `);
    result.appendChild(divP);
    let divSpan = document.createElement("span");
    append(divP, divSpan, divResult);
}

function checkIfNumber (first, second){
    if(first == "" || second == ""){
        alert(`Error. Обрахунок неможливий`);
        return;
    }else if(isNaN(first) && isNaN(second)){
        alert(`First and second value is not a number!`);
        return;
    }else if(isNaN(first)){
        alert(`First value is not a number!`);
        return;
    }else if(isNaN(second)){
        alert(`Second value is not a number!`);
        return;
    }else{
        getSum(firstValue, secondValue);
        getSub(firstValue, secondValue);
        getMult(firstValue, secondValue);
        getDiv(firstValue, secondValue);
    }
}
checkIfNumber (firstValue, secondValue)


// 3. Модифікувати скрипт до завдання 2 таким чином, щоб чим більшим (меншим) є результат – тим темнішим є колір.

let array = document.querySelector(".array");
array.setAttribute('style','margin-top: 50ps; font-size: 18px; text-align: center');
let testArray = [12, "testText", 21, 55, 405, null, 190, 600, true];

function colorSettings(value,element){
    if(value < -1000){element.setAttribute('style','color: #480000');}
    else if(value < -100){element.setAttribute('style','color: #780000');}
    else if(value < -10){element.setAttribute('style','color:  #A80000');}
    else if(value < 0){element.setAttribute('style','color: #C80000');}
    else if(value === 0){element.setAttribute('style','color: #FF0000');}
    else if(value < 10){element.setAttribute('style','color: #ff3333');}
    else if(value < 100){element.setAttribute('style','color: #ff6666');}
    else if(value < 1000){element.setAttribute('style','color: #ff9999');}
    else if(value > 1000){element.setAttribute('style','color: #ffcccc');}
}

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
let stringResult = `Найменше значення: ${minValue}`;
let p = document.createElement('p');
p.textContent = stringResult;
colorSettings(minValue,p);
array.appendChild(p);
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
let stringResult = `Найбільше значення: ${maxValue}`;
let p = document.createElement('p');
p.textContent = stringResult;
colorSettings(maxValue,p);
array.appendChild(p);
}
maxValueFunc(testArray);