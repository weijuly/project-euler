/*jshint esversion: 6 */
console.log('https://projecteuler.net/problem=39');
var start = new Date();

var right = function(_a, _b, _c) {
    if (_a * _a == (_b * _b + _c * _c)) {
        return true;
    }
    return false;
};

var perimeters = [];

var mode = function(_list) {
    return _list.sort((a, b) =>
        _list.filter(v => v === a).length -
        _list.filter(v => v === b).length
    ).pop();
};


for (var i = 1000; i > 1; i--) {
    for (var j = i - 1; j > 1; j--) {
        for (var k = j - 1; k > 1; k--) {
            if ((i + j + k) <= 1000 && right(i, j, k)) {
                perimeters.push(i + j + k);
            }
        }
    }
}
console.log('result: ' + mode(perimeters));

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
