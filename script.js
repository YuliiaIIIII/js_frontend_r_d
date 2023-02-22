let firstValue = prompt("Введіть перше число", "");

let secondValue = prompt("Введіть друге число", "");

let addResult = Number(firstValue) + Number(secondValue);
let subResult = firstValue - secondValue;
let multipleResult = firstValue * secondValue;
let divResult = firstValue / secondValue;

alert (`Результати математичних операцій.
Додавання: ${addResult}
Віднімання: ${subResult}
Множення: ${multipleResult}
Ділення: ${divResult}`);