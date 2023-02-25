let firstValue = prompt("Введіть перше число", "");
let secondValue = prompt("Введіть друге число", "");

let addResult = 0;
let subResult = 0;
let multipleResult = 0;
let divResult =  0;

addResult = Number(firstValue) + Number(secondValue);
subResult = firstValue - secondValue;
multipleResult = firstValue * secondValue;
divResult = firstValue / secondValue;

if(firstValue == "" || secondValue == ""){
    alert(`Error. Обрахунок неможливий`);
}
else if(firstValue < secondValue){
    confirm(`Ви впевнені, що хочете продовжити операцію?`);
    if(true){
        alert (`Результат додавання: ${addResult}`);
        alert (`Результат віднімання: ${subResult}`);
        alert (`Результат множення: ${multipleResult}`);
        alert (`Результат ділення: ${divResult}`);
    }
    // else{
    //     alert (`Результат додавання: ${addResult}`);
    //     alert (`Результат множення: ${multipleResult}`);
    //     alert (`Результат ділення: ${divResult}`);
    // }

    
//   Після підтвердження – показати результат. віднімання, в противному випадку пропустити повідомлення з показом результату

if(secondValue == 0){
    alert (`Error. На нуль ділити не можна!`);
}else{
   
    alert (`Результат ділення: ${divResult}`);
}
}