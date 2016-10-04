var _ = require('underscore');
console.log('https://projecteuler.net/problem=44');
var start = new Date();

var pentagons = [];
var p = 0;
for (var i = 1000; i < 10000; i++) {
    p = i * (3 * i - 1) / 2;
    pentagons.push(p);
}
var mdif = 9999999;

var update = function(_min) {
    if (_min < mdif) {
        mdif = _min;
        console.log('result: ' + _min);
    }
};
var giveup = false;
for (var i = 0; i < pentagons.length; i++) {
    for (var j = i + 1; j < pentagons.length; j++) {
        var sum = pentagons[i] + pentagons[j];
        var dif = pentagons[j] - pentagons[i];
        if (sum < p && _.contains(pentagons, dif) && _.contains(pentagons, sum)) {
            update(dif);
            giveup = true;
            break;
        }
    }
    if (giveup) {
        break;
    }
}

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
