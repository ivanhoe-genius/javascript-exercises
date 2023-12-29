const leapYears = function (someYear) {
    if (someYear % 4 === 0 && someYear % 100 !== 0 || (someYear % 100 === 0 && someYear % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
