var _ = require('underscore');
console.log('https://projecteuler.net/problem=12');
var start = new Date();

var triangular = 3;
var runner = 3;
var divisors = 0;
var numOfDivisors = function(_tri) {
    var divs = [1, _tri];
    for (var i = 2; i <= _tri / 2; i++) {
        if (_tri % i === 0) {
            if (_.contains(divs, _tri / i)) {
                break;
            }
            divs.push(i);
            divs.push(_tri / i);
        }
    }
    return divs.length;
};

while (true) {
    triangular += runner;
    runner += 1;
    divisors = numOfDivisors(triangular);
    if (divisors > 500) {
        console.log('Triangular number: ' + triangular + ' No of Divisors: ' + divisors);
        break;
    }
}

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
