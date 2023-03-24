const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    const array = [1];
    for (let i = 0; i < number-1; i++) {
        array.push(~~array[array.length-1] + ~~array[array.length-2])
    }
    return array[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
