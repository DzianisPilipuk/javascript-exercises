const findTheOldest = function(array) {
    // check the age
    array.forEach(element => {
        if ("yearOfDeath" in element) {
            element.age = element.yearOfDeath - element.yearOfBirth;
        }
        else {
            element.age = (new Date).getFullYear() - element.yearOfBirth;
        }
    });
    // leave onle the oldest
    for (let i = 0; i < array.length; i++) {
        if(~~array[array.length - 1].age < ~~array[0].age) {
            array.pop(); 
        }
        else if(~~array[array.length - 1].age > ~~array[0].age) {
            array.shift();
        }
    }

    return(array[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
