console.log('https://projecteuler.net/problem=10');
var start = new Date();
var primes = [2, 3, 5, 7];
var runner = 10;

var isPrime = function(_number) {
    if (_number % 2 === 0) {
        return false;
    }
    for (var i = 3; i <= Math.sqrt(_number); i = i + 2) {
        if (_number % i === 0) {
            return false;
        }
    }
    return true;
};
while (runner < 2000000) {
    if (isPrime(runner)) {
        primes.push(runner);
    }
    runner += 1;
}
var sum = primes.reduce(function(_x, _y) {
    return _x + _y;
}, 0);
console.log(sum);
var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
