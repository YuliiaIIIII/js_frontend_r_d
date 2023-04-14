////////////////////////lesson23
const mixArray = ["test", 10, 5, "test2", 0, 75, null, true, 3, 45];
const onlyNumbers = [5, 10, 15, -25]
const emptyArray = [];

function getSum (anyArray){
    let sum = 0;
    for (let i = 0; i < anyArray.length; i++){
        if(typeof anyArray[i] == 'number'){  
        sum = sum + anyArray[i];
        }
    }
    return sum;
}
console.log(getSum (mixArray));

// // 3. Написати скрипт, який буде шукати мінімальне та максимальне значення елементів масиву.

function maxValueFn (newArray){
    let maxValue = -Infinity;
    for (let i = 0; i < newArray.length; i++) {
        if(typeof newArray[i] !== 'number'){
            continue;
        }else{
            if (maxValue < newArray[i]) {
            maxValue = newArray[i];
            }  
        }
    }
    return maxValue;
}

function minValueFn (newArray){
    let minValue = Infinity;
    for (let i = 0; i < newArray.length; i++) {
        if(typeof newArray[i] !== 'number'){
            continue;
        }else{
            if (minValue > newArray[i]) {
            minValue = newArray[i];
            }  
        }  
    }
    return minValue;
} 
let maxDescr = "Найбільше значення:"
let minDescr = "Найменше значення:"

console.log(`${maxDescr} ${maxValueFn (mixArray)}`);
console.log(`${minDescr} ${minValueFn (mixArray)}`);

console.log(`${maxDescr} ${maxValueFn (onlyNumbers)}`);
console.log(`${minDescr}  ${minValueFn (onlyNumbers)}`);


// // 5. Написати скрипт який виведе наступне:
// // #
// // ##
// // ###
// // ####
// // #####

function symbolTriangle(symbol){
    let someString = "";
    for(let j = 0; j<5; j++){
        someString += symbol;
        console.log(someString);
    }
}
symbolTriangle ("#");

////////////////////////lesson26
function Accumulator(newValue){
    this.value = newValue;
    if(typeof newValue !== "number"){
        console.error(`Only for numbers`);
        return;
    }
}

Accumulator.prototype.increment = function(){
    this.value++;
}
Accumulator.prototype.decrement = function(){
    this.value--;
}

let userValue = new Accumulator(-1);

console.log(userValue.value);

userValue.increment();
console.log(userValue.value);

userValue.decrement();
console.log(userValue.value);


// // 2. Створити конструктор CancelableAccumulator, який буде наслідувати Accumulator та додатково буде реалізовувати метод clear, при виклику якого значення збереженого числа має стати таким, яким його передали в конструкторі.

function CancelableAccumulator(clearValue){
    Accumulator.call(this, clearValue);
    this.clearValue = clearValue;
};

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function() {
    this.value = this.clearValue;
    // this.value = Accumulator.prototype.value;
};

let newValue = new CancelableAccumulator(55);

console.log(newValue.value, "is start value");

newValue.increment();
console.log(newValue.value);

newValue.increment();
console.log(newValue.value);

newValue.clear();
console.log(newValue.value, "is clear value");

////////////////////////lesson28
let transform = document.querySelector('.userPhoto');

transform.addEventListener('click',() => {
	transform.classList.toggle('transformPhotoSize');
});

document.addEventListener('keydown', function (event){ 
    if (event.key == 's' || event.key == 'S' ) {
        const element = document.querySelector("#letterS");
        element.scrollIntoView(true);
    }
    else if (event.key == 'h' || event.key == 'H' ) {
        const element = document.querySelector("#letterH");
        element.scrollIntoView(true);
    }
    else if (event.key == 'w' || event.key == 'W' ) {
        const element = document.querySelector("#letterW");
        element.scrollIntoView(true);
    }
    else if (event.key == 'e' || event.key == 'E' ) {
        const element = document.querySelector("#letterE");
        element.scrollIntoView(true);
    }
});