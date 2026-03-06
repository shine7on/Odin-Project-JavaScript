const sumAll = function(param1, param2) {
    let start = param1;
    let end = param2;

    if (param1 > param2) {
        start = param2;
        end = param1;
    }

    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    let sum = 0;

    for (let i = start; i < end + 1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
