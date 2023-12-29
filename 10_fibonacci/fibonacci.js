const fibonacci = function (el) {
    if (el < 0) return 'OOPS';

    const arr = [];
    for (let i = 0; i <= el; i++) {
        if (i === 0) {
            arr.push(0);
        } else if (i === 1) {
            arr.push(1);
        } else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
