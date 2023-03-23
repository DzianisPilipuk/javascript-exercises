const palindromes = function (string) {
    const converted = string.toLowerCase().match(/[a-zA-Z]/g);
    half_1 = converted.slice(0, converted.length / -2).reverse();
    half_2 = converted.slice(converted.length / 2);
    return(half_1.toString() == half_2.toString());
};

// Do not edit below this line
module.exports = palindromes;
