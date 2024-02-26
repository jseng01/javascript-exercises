const add = function(x,y) {
  let z = x+y;
return z;}

const subtract = function(x,y) {
	let z = x-y;
return z;
};

const sum = function(toSum) {
  let total = 0;
 toSum.forEach(element => {
  total += element;}
  )
  return total;
}
const multiply = function(toMulti) {
  let total = 1;
  toMulti.forEach(element => {
   total *= element;}
   )
   return total;
};

const power = function(x, y) {
	let z = x ** y;
  return z;
};

const factorial = function(x) {
  let total = 1;
  let toFactor = [];
  for (let i=1; i <= x; i++){
    toFactor.push(i);
  }
  toFactor.forEach(element =>{
    total *= element;
  })
  return total;
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
