let string = 'hey';
let number = 0;
function repeatString(string, number){    
    let newString = '';
    for (let i = 1; i <= number; i++){
    newString += string;
}
return newString
}
// Do not edit below this line
module.exports = repeatString;
