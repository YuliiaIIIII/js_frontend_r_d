// 1. Створити новий масив на 10 елементів з довільними числами. 
// const newArray = [-10, 35, 20, 2, 0, 85, 77, 41, 45, 54];
const newArray = ["test", -10, 5, "test2", 0, 75, null, true, 3, 45];

// 2. Написати скрипт для пошуку суми елементів масиву
let sum = 0;
for (let i = 0; i < newArray.length; i++){
    if(typeof newArray[i] == 'number'){  
    sum = sum + newArray[i];
    }
}

// 3. Написати скрипт, який буде шукати мінімальне та максимальне значення елементів масиву.
// 4. В пунктах 2 та 3 потрібно робити перевірку на тип елементу масиву і не брати до уваги елементи які не є числами
let minValue = Infinity;
let maxValue = -Infinity;
for (let i = 0; i < newArray.length; i++) {
    if(typeof newArray[i] !== 'number'){
        continue;
    }else{
        
    if (maxValue < newArray[i]) {
        maxValue = newArray[i];
    }
    if (minValue > newArray[i]) {
        minValue = newArray[i];
    }
  } 
}
alert (`Сума всіх елементів: ${sum}`);
alert (`Найбільше значення: ${maxValue}`);
alert (`Найменше значення: ${minValue}`);
    

// 5. Написати скрипт який виведе наступне:
// #
// ##
// ###
// ####
// #####
let emptyString = "";
for(let j = 0; j<5; j++){
    emptyString += "#";
    console.log(emptyString);
}