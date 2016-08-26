var _ = require('underscore');
console.log('https://projecteuler.net/problem=32');
var start = new Date();

var unique = function(_x, _y) {
    var digits = _x.toString() + _y.toString();
    return _.isEqual(_.sortBy(_.uniq(digits)), _.sortBy(digits));
};
var pandigital = function(_x, _y, _z) {
    var digits = _x.toString() + _y.toString() + _z.toString();
    if (digits.length != 9) {
        return false;
    }
    return _.isEqual(_.sortBy(_.uniq(digits)), _.sortBy('123456789'));
};

var products = [];
var sum = 0;
for (var i = 1; i < 500; i++) {
    for (var j = i + 1; j < 2000; j++) {
        if (!unique(i, j)) {
            continue;
        }
        var k = i * j;
        if (pandigital(i, j, k)) {
            if (!_.contains(products, k)) {
                products.push(k);
            }
        }
    }
}
for (var i = 0; i < products.length; i++) {
    sum += products[i];
}
console.log('result: ' + sum);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
