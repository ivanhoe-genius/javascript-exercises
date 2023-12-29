const palindromes = function (str) {
    const arr = [];

    str.toLowerCase().split('').forEach((el => {
        if (/[a-z0-9]/.test(el)) {
            arr.push(el);
        }
    }));

    const tempArr = [];
    arr.forEach((el, i) => {
        if (el === arr[arr.length - 1 - i]) {
            tempArr.push(true);
        } else { tempArr.push(false); }
    });

    return tempArr.every((el) => el === true);

};

// Do not edit below this line
module.exports = palindromes;
