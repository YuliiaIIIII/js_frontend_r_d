// 1. Створити новий масив на 10 елементів з довільними числами. 
const newArray = [-10, 35, 20, 2, 0, 85, 77, 41, 45, 54];
// const newArray = [10, 15, "test", 20, null, true, 25, 30, 35, 40, 45, 50, 55];


// 2. Написати скрипт для пошуку суми елементів масиву
// 3. Написати скрипт, який буде шукати мінімальне та максимальне значення елементів масиву.
// 4. В пунктах 2 та 3 потрібно робити перевірку на тип елементу масиву і не брати до уваги елементи які не є числами
let sum = 0;
let minValue = newArray[0];
let maxValue = newArray[0];
for (let i = 0; i < newArray.length; i++){
    if(typeof newArray[i] == 'number'){  
    sum = sum + newArray[i];
    }
    if (newArray[i] > maxValue) {
        maxValue = newArray[i];
    }
    if (newArray[i] < minValue) {
        minValue = newArray[i];
    }
}

alert (`Сума всіх елементів: ` + sum);
alert (`Найбільше значення: ` + maxValue);
alert (`Найменше значення: ` + minValue);


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