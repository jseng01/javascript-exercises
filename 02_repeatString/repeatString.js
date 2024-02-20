let string = 'hey';
let number = 3;
let newString = '';
function repeatString(string, number){    
    for (let i = 0; i < number; i++){
    newString += string;
}
return newString
}
// Do not edit below this line
module.exports = repeatString;
