console.log('https://projecteuler.net/problem=7');
var start = new Date();
var primes = [2, 3, 5, 7];
var runner = 10;

var isPrime = function(_number) {
    for (var i = 2; i <= _number / 2; i++) {
        if (_number % i === 0) {
            return false;
        }
    }
    return true;
};
while (true) {
    if (isPrime(runner)) {
        primes.push(runner);
    }
    if (primes.length == 10001) {
        break;
    }
    runner += 1;
}
console.log(primes[10000]);
var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
