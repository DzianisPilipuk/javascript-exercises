const add = function(num_1, num_2) {
	let result = num_1 + num_2;
  return result;
};

const subtract = function(num_1, num_2) {
	let result = num_1 - num_2;
  return result;
};

const sum = function(array) {
	let result = 0;
  array.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(num, power) {
  let result = 1;
	for (let i = 0; i < power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let index = 0; index < num; index++) {
    result *= (num - index);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
