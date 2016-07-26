console.log('https://projecteuler.net/problem=27');
var start = new Date();

var primes = [];
var isPrime = function(_number) {
    if (_number < 0) {
        return false;
    }
    if (_number == 2 || _number == 3) {
        return true;
    }
    for (var i = 2; i <= _number / 2; i++) {
        if (_number % i === 0) {
            return false;
        }
    }
    return true;
};

for (var i = 7; i < 1000; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}
var ax = 0;
var bx = 0;
var nx = 0;
var update = function(_n, _a, _b) {
    if (_n > nx) {
        nx = _n;
        ax = _a;
        bx = _b;
    }
};

for (var i = 0; i < primes.length; i++) {
    for (var j = -999; j < 1000; j++) {
        var n = 1;
        while (true) {
            var possible = n * n + j * n + primes[i];
            if (isPrime(possible)) {
                n = n + 1;
                continue;
            } else {
                break;
            }
        }
        update(n, j, primes[i]);
    }
}
console.log('result: ' + (ax * bx));

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
