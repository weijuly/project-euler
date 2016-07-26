// TODO: runs more than a minute. Optimize :-(

var _ = require('underscore');
console.log('https://projecteuler.net/problem=23');
var start = new Date();

var abundants = [12];
var result = 0;
var nonabundants = [];
var isAbundant = function(_x) {
    var sum = 1;
    for (var i = 2; i <= _x / 2; i++) {
        if (_x % i === 0) {
            sum += i;
        }
    }
    return (sum > _x);
};

for (var i = 1; i < 24; i++) {
    result += i;
}

for (var i = 24; i <= 28123; i++) {
    var canBeExpressed = false;
    for (var j = 0; j < abundants.length; j++) {
        b = i - abundants[j];
        if (isAbundant(b) && !_.contains(abundants, b)) {
            canBeExpressed = true;
            abundants.push(b);
            break;
        }
        if (_.contains(abundants, b)) {
            canBeExpressed = true;
            break;
        }
    }
    if (!canBeExpressed) {
        result += i;
    }
}

console.log('sum: ' + result);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
