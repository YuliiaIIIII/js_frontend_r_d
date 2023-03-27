// 1. Створити конструктор Accumulator. Даний конструктор має приймати число, яке буде початковим значенням. Клас має реалізувати методи increment, при виклику якого передане значення має збільшуватись на 1, та decrement, при виклиці якого значення має зменшуватись.
function Accumulator(value){
    this.value = value;
    Accumulator.prototype.increment = function(){
        value++;
        console.log(value);
    }
    Accumulator.prototype.decrement = function(){
        value--;
        console.log(value);
    }
}
let userValue = new Accumulator(10);
userValue.increment();
userValue.decrement();
userValue.increment();
userValue.decrement();

// 2. Створити конструктор CancelableAccumulator, який буде наслідувати Accumulator та додатково буде реалізовувати метод clear, при виклику якого значення збереженого числа має стати таким, яким його передали в конструкторі.
function CancelableAccumulator(){

}