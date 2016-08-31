var _ = require('underscore');
console.log('https://projecteuler.net/problem=33');
var start = new Date();

var atoi = function(_digit) {
    return _digit.charCodeAt(0) - 48;
};

var scan = function(_xx, _yy) {
    var xx = _xx.toString().split('');
    var yy = _yy.toString().split('');
    var common = _.intersection(xx, yy);
    if (common.length != 1) {
        return;
    }
    var xm = atoi((_.difference(xx, common)).join(''));
    var ym = atoi((_.difference(yy, common)).join(''));
    if (xm / ym == _xx / _yy) {
        console.log(_xx + ':' + _yy + ' =>> ' + xm + ':' + ym);
    }

};

//scan(49, 98);

for (var i = 10; i < 100; i++) {
    if (i % 10 === 0) {
        continue;
    }
    for (var j = i + 1; j < 100; j++) {
        scan(i, j);
    }
}

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
