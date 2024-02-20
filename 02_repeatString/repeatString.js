let string = 'hey';
let number = 0;
function repeatString(string, number){    
    if (number >= 0){
        let newString = '';
        for (let i = 1; i <= number; i++){
        newString += string;
}
return newString
    }
    else return 'ERROR';
}
// Do not edit below this line
module.exports = repeatString;
