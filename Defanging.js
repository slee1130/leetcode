

// Brainstorming:
// 1. split address array
// 2. iterate over(looping thru) to check whether index equals '.'
// 3. if index equals '.' change it to '[.]'
// 4. and push it to empty result array



var defangIPaddr = function (address) {
    let ad = address.split('');
    let result = [];
    for (let i = 0; i < ad.length; i++) {
        if (ad[i] === '.') {
            ad[i] = '[.]';
            result.push(ad[i]);
            continue;
        }
        result.push(ad[i]);
    }
    return result.join('');
};

// better answers

const defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]");
};

var defangIPaddr = address => (address.split('.').join('[.]'));