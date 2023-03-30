// // 1. Створити конструктор Accumulator. Даний конструктор має приймати число, яке буде початковим значенням. Клас має реалізувати методи increment, при виклику якого передане значення має збільшуватись на 1, та decrement, при виклиці якого значення має зменшуватись.
function Accumulator(value){
    this.value = value;
    if(typeof value !== "number"){
        console.error(`Only for numbers`);
        return;
    }
    
    Accumulator.prototype.increment = function(){
        return `${++value}`;
    }
    Accumulator.prototype.decrement = function(){
        return `${--value}`;
    }
}
let userValue = new Accumulator(-1);
console.log(userValue.increment());
console.log(userValue.increment());
console.log(userValue.decrement());
console.log(userValue.decrement());


// // 2. Створити конструктор CancelableAccumulator, який буде наслідувати Accumulator та додатково буде реалізовувати метод clear, при виклику якого значення збереженого числа має стати таким, яким його передали в конструкторі.
function CancelableAccumulator(startValue){
    Accumulator.call(this, startValue);
    this.startValue = startValue;

};
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

CancelableAccumulator.prototype.clear = function() {
    this.value = this.startValue;
};

let startValue = new CancelableAccumulator(5);

console.log(startValue.value);
startValue.increment();
startValue.increment();
console.log(startValue.value);
console.log(startValue.value);
