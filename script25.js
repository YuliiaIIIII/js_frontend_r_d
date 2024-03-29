// 1. Напишіть функцію, яка буде перевіряти обʼєкт на пустоту

const testObject = {};
const notEmptyObj = {
    name: "Sem",
    age: 35
}
function checkEmptyObj (anyObject){
  for (let key in anyObject) {
        return false;
    }return true;
}
console.log(checkEmptyObj(testObject));
console.log(checkEmptyObj(notEmptyObj));


// 2. Опишіть обʼєкт user з полями name, age та методом sayHello, результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”

let user = {
    name: "James",
    age: 25,
    sayHello: function() {
        console.log('Привіт, я ' + this.name + ' мені ' + this.age + ' років.');
        }
}
user.sayHello();


// 3. Напишіть обʼєкт калькулятор. Він має містити метод ask, sum та mul. При виклику методу ask обʼєкт має запросити 2 числа та зберегти їх, як свої властивості. При виклику sum - вивести суму збережених чисел, при виклику mul - додаток чисел.

let calc = {
    firstValue: 0,
    secondValue: 0,
    ask: function (){
        this.firstValue = parseFloat(prompt("Введіть перше число: "));
        this.secondValue = parseFloat(prompt("Введіть друге число: ")); 
    },
    sum: function(){
        if(!isNaN(this.firstValue) && !isNaN(this.secondValue)){
            let sumResult = this.firstValue + this.secondValue;
            console.log(`Сума чисел: ${sumResult}`);
        }else if(isNaN(this.firstValue)){
            console.log("Перше значення не є числом.")
        }
    },
    mul: function(){
        if(!isNaN(this.firstValue) && !isNaN(this.secondValue)){
        let mulResult = this.firstValue * this.secondValue;
        console.log(`Добуток чисел: ${mulResult}`);
    }else if(isNaN(this.secondValue)){
        console.log("Друге значення не є числом.")
    }
    }
}
calc.ask();
calc.sum();
calc.mul();