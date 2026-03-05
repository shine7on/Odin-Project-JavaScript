const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        array = array.filter((item) => item !== arg);
    }
    return array;

    // or return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
