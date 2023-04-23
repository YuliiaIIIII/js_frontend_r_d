// 1

Array.prototype.pow = function (n) {
    let resultArr = [];
    this.forEach((item) => {
        resultArr.push(Math.pow(item, n));
    });
    return console.log(resultArr);
}
const newArray = [1,3,5,7,9];

newArray.pow(2);
newArray.pow(3);
[5,10,15].pow(2);


// 2

function alertTest() {
    alert('test');
}

Function.prototype.defer = function(sec) {
    setTimeout(this, sec);
};

alertTest.defer(1000);