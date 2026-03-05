const repeatString = function(word, int) {
    if (int < 0) {
        return 'ERROR';
    }
    let res = '';
    for(let i=0; i<int; i++) {
        res += word
    }
    return res;
};

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
