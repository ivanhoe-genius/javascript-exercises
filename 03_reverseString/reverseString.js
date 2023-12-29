const reverseString = function (someString) {
    const someArray = someString.split('');
    someArray.reverse();
    return someArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
