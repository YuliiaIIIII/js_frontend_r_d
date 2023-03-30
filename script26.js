// // 1. Створити конструктор Accumulator. Даний конструктор має приймати число, яке буде початковим значенням. Клас має реалізувати методи increment, при виклику якого передане значення має збільшуватись на 1, та decrement, при виклиці якого значення має зменшуватись.

function Accumulator(value){
    this.value = value;
    if(typeof value !== "number"){
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

function CancelableAccumulator(value){
    Accumulator.call(this, value);
    this.value = value;
};

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function() {
    this.value = this.value;
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