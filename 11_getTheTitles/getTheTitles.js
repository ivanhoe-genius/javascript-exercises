const getTheTitles = function (books) {
    const arr = [];
    books.forEach(el => {
        arr.push(Object.values(el)[0]);
    });
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
