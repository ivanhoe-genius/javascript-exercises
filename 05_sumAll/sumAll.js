const sumAll = function (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    const startNum = num1 < num2 ? num1 : num2;
    const endNum = num1 < num2 ? num2 : num1;

    const arrayOfNums = [];

    for (let i = startNum; i <= endNum; i++) {
        arrayOfNums.push(i);
    }

    return arrayOfNums.reduce(
        (a, b) => a + b
    );

};

// Do not edit below this line
module.exports = sumAll;
