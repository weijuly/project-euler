var _ = require('underscore');
console.log('https://projecteuler.net/problem=35');
var start = new Date();

var cprimes = [2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97];
var primes = [];
var isPrime = function(_number) {
    for (var i = 2; i <= Math.sqrt(_number); i++) {
        if (_number % i === 0) {
            return false;
        }
    }
    return true;
};

var rotate = function(_number) {
    var digits = _number.toString().split('');
    var last = digits.pop();
    digits.unshift(last);
    return parseInt(digits.join(''));
};

var isCircularPrime = function(_number) {
    var runner = rotate(_number);
    var rotations = [_number];
    while (runner != _number) {
        if (!_.contains(primes, runner)) {
            return [];
        }
        rotations.push(runner);
        runner = rotate(runner);
    }
    return rotations;
};

var cPrimesAppend = function(_primes) {
    for (var i = 0; i < _primes.length; i++) {
        if (!_.contains(cprimes, _primes[i])) {
            cprimes.push(_primes[i]);
        }
    }
};

for (var i = 100; i < 1000000; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }

}
for (var i = 0; i < primes.length; i++) {
    var dprimes = isCircularPrime(primes[i]);
    if (dprimes.length > 0) {
        cPrimesAppend(dprimes);
    }
}

console.log('result: ' + cprimes.length);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
