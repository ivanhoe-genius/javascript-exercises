const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();

    const peopleAges = people.map(person => {
        return { name: person.name, age: (person.yearOfDeath ?? currentYear) - person.yearOfBirth };
    });


    const oldest = peopleAges.reduce((a, b) => {
        if (a.age > b.age) {
            return a;
        } else {
            return b;
        }
    }, {});

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
