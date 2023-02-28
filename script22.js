let firstValue = prompt("Введіть перше число", "");
let secondValue = prompt("Введіть друге число", "");

// let addResult = 0;
// let subResult = 0;
// let multipleResult = 0;
// let divResult =  0;

let addResult = Number(firstValue) + Number(secondValue);
let subResult = firstValue - secondValue;
let multipleResult = firstValue * secondValue;
let divResult = firstValue / secondValue;

if(firstValue == "" || secondValue == ""){
    alert(`Error. Обрахунок неможливий`);
}
else if(firstValue < secondValue){
    confirm(`Ви впевнені, що хочете продовжити операцію?`);
}else{
    alert (`Результат додавання: ${addResult}`);
    alert (`Результат віднімання: ${subResult}`);
    alert (`Результат множення: ${multipleResult}`);

        if(secondValue == 0){
            alert (`Error. На нуль ділити не можна!`);
        }else{
            alert (`Результат ділення: ${divResult}`);
        }
    
}

// if(confirm ("Ok")== true){

// }else{
// alert (`Результат додавання: ${addResult}`);

// alert (`Результат множення: ${multipleResult}`);
// }
    // if{
    //     alert (`Результат додавання: ${addResult}`);
    //     alert (`Результат множення: ${multipleResult}`);
    //     alert (`Результат ділення: ${divResult}`);
    // }

    
//   Після підтвердження – показати результат. віднімання, в противному випадку пропустити повідомлення з показом результату


