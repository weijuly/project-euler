var utils = require('./utils.js');
var _ = require('underscore');
console.log('https://projecteuler.net/problem=50');
var start = new Date();

var primes = utils.primes(2, 1000000);
var maxl = 0;
var maxp = 0;

for (var i = 0; i < primes.length; i++) {
    var subsection = [primes[i]];
    for (var j = i + 1; j < primes.length; j += 2) {
        subsection.push(primes[j]);
        subsection.push(primes[j + 1]);
        var total = _.reduce(subsection, function(_a, _b) {
            return _a + _b;
        }, 0);
        if (total > 1000000) {
            break;
        }
        if (_.contains(primes, total)) {
            if (maxl < subsection.length) {
                maxl = subsection.length;
                maxp = total;
            }
        }
    }
}

console.log('result:', maxp);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
