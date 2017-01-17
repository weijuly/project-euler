console.log('https://projecteuler.net/problem=58');
var start = new Date();

var isPrime = function(_number) {
    for (var i = 2; i <= Math.sqrt(_number); i++) {
        if (_number % i === 0) {
            return false;
        }
    }
    return true;
};

numbers = [1];
primes = [];
var runner = 1;
for (var i = 1; i < 20000; i++) {
    for (var j = 1; j <= 4; j++) {
        var next = runner + (j * (2 * i));
        numbers.push(next);
        if (isPrime(next)) {
            primes.push(next);
        }
    }
    runner = next;
    var ratio = primes.length * 100.0 / numbers.length;
    if (ratio < 10) {
        console.log('spiral:', 2 * i + 1, 'numbers:', numbers.length, 'primes:', primes.length, 'ratio:', ratio);
        console.log('result:', 2 * i + 1);
        break;
    }
}

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
