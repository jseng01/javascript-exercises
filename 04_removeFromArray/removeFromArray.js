const removeFromArray = function(array, ...args ) { 
for (const item of array) {
    if (item == args){
     let position = array.indexOf(item);
     array.splice(position, 1)
}

   else{
     continue;
   }
}
return array;
}

// Do not edit below this line
module.exports = removeFromArray;
