let firstValue = prompt("Введіть перше число", "");
let secondValue = prompt("Введіть друге число", "");

let addResult = Number(firstValue) + Number(secondValue);
let subResult = firstValue - secondValue;
let multipleResult = firstValue * secondValue;
let divResult = firstValue / secondValue;
if(secondValue == 0){
    divResult = `Error. На нуль ділити не можна!`;
}

if(firstValue == "" || secondValue == ""){
    alert(`Error. Обрахунок неможливий`);
}

else if(firstValue < secondValue){
    let userChoise = confirm(`Ви впевнені, що хочете продовжити операцію?`);
    if(userChoise){
        alert (`Результат додавання: ${addResult}`);
        alert (`Результат віднімання: ${subResult}`);
        alert (`Результат множення: ${multipleResult}`);
        alert (`Результат ділення: ${divResult}`);
    }else{
        alert (`Результат додавання: ${addResult}`);
        alert (`Результат множення: ${multipleResult}`);
        alert (`Результат ділення: ${divResult}`);
    }
}else{
    alert (`Результат додавання: ${addResult}`);
    alert (`Результат віднімання: ${subResult}`);
    alert (`Результат множення: ${multipleResult}`);
    alert (`Результат ділення: ${divResult}`);
}