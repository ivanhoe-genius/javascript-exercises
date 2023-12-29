const removeFromArray = function (someArray, ...someArgs) {
    someArgs.forEach(el => {
        if (someArray.includes(el)) {
            someArray.splice(someArray.indexOf(el), 1);
        }
    });



    return someArray;
};

// Do not edit below this line
module.exports = removeFromArray;
