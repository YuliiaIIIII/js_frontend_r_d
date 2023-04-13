// window onload(){

// }
const today = new Date();
console.log(today);

const newYearDay = new Date(2023, 11, 31, 23, 59, 59);
console.log(newYearDay);

let res = newYearDay - today;
console.log(res);

function getData (dataValue){
    dataValue.toISOString();
    let yearValue = dataValue.getFullYear();
    let monthValue = dataValue.getMonth();
    let dayValue = dataValue.getDay();
    
    let hoursValue = dataValue.getHours();
    let minutesValue = dataValue.getMinutes();

    console.log(yearValue);
    console.log(monthValue);
    console.log(dayValue);
    
    console.log(hoursValue);
    console.log(minutesValue);
}
getData (today);
getData (newYearDay);

