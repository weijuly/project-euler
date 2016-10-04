var _ = require('underscore');
console.log('https://projecteuler.net/problem=53');
var start = new Date();

var comb = function(_n, _r) {
    var numerators = [];
    var denominatorsx = [];
    var denominatorsy = [];

    for (var i = 1; i <= _n; i++) {
        numerators.push(i);
    }
    for (i = 1; i <= _r; i++) {
        denominatorsx.push(i);
    }
    for (i = 1; i <= _n - _r; i++) {
        denominatorsy.push(i);
    }
    var common = [];
    if (denominatorsx.length > denominatorsy.length) {
        common = _.intersection(numerators, denominatorsx);
        if (_.isEqual(common, denominatorsx)) {
            numerators = _.difference(numerators, denominatorsx);
            denominatorsx = [];
        }
    } else {
        common = _.intersection(numerators, denominatorsy);
        if (_.isEqual(common, denominatorsy)) {
            numerators = _.difference(numerators, denominatorsy);
            denominatorsy = [];
        }
    }
    var denominators = denominatorsx.concat(denominatorsy);
    var prod = 1;
    for (i = 0; i < numerators.length; i++) {
        prod *= numerators[i];
    }
    for (i = 0; i < denominators.length; i++) {
        prod /= denominators[i];
    }
    return prod;

};

var count = 0;
for (var i = 22; i <= 100; i++) {
    for (var j = 0; j <= i; j++) {
        var c = comb(i, j);
        if (c > 1000000) {
            count += 1;
        }
    }
}
console.log('result:', count);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
