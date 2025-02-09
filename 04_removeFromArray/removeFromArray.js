const removeFromArray = function(array1, ...args) {
    newArray = []
    console.log(args)
    for (const value of array1) {
        if (!args.includes(value)) {
            newArray.push(value)
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
