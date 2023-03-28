// 1. Створити конструктор Accumulator. Даний конструктор має приймати число, яке буде початковим значенням. Клас має реалізувати методи increment, при виклику якого передане значення має збільшуватись на 1, та decrement, при виклиці якого значення має зменшуватись.
function Accumulator(value){
    this.value = value;
    if(typeof value !== "number"){
        console.log("Only for numbers");
        return;
    }
    
    Accumulator.prototype.increment = function(){
        return `${++value}`;
    }
    Accumulator.prototype.decrement = function(){
        return `${--value}`;
    }
}
let userValue = new Accumulator(0);
console.log(userValue.increment());
console.log(userValue.increment());
console.log(userValue.decrement());
console.log(userValue.decrement());


// 2. Створити конструктор CancelableAccumulator, який буде наслідувати Accumulator та додатково буде реалізовувати метод clear, при виклику якого значення збереженого числа має стати таким, яким його передали в конструкторі.
function CancelableAccumulator(value){
    Accumulator.call(this, value);
    this.value = value;

    CancelableAccumulator.prototype.clear = function() {
        this.value = value;
}
}   

  
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
let skipValue = new CancelableAccumulator(10);
console.log(skipValue.value);
console.log(skipValue.increment());
skipValue.clear();
console.log(skipValue.increment());
console.log(skipValue.decrement());
console.log(skipValue.decrement());