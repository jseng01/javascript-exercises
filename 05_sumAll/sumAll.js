const sumAll = function() {
let total = 0;
let toAdd = [];

if (arguments[0] < 0 || arguments[1] < 0){
    return "ERROR";
}
if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])){
    return "ERROR"}
else if (arguments[0] < arguments[1]){
        for (let i = arguments[0]; i <= arguments[1]; i++){
            toAdd.push(i);
            }
        }
    else if(arguments[0] > arguments[1]){
        for (let i = arguments[1]; i <= arguments[0]; i++){
            toAdd.push(i);
            }
        } 


   
    toAdd.forEach(num =>{
        total += num;
        })
return total;
    }
// establish a counter set to the first argument
// have the counter add itself to a variable before iterating
// iterate until the counter reaches the second argument
// return the sum

// Do not edit below this line
module.exports = sumAll;
