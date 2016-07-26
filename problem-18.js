var _ = require('underscore');
console.log('https://projecteuler.net/problem=18');
var start = new Date();
var triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];

var merge = function(_curr, _next) {
    if (_.isEqual([], _curr)) {
        return _next;
    }
    var summed = [];
    for (var i = 0; i < _curr.length; i++) {
        for (var j = i; j < i + 2; j++) {
            summed.push(_curr[i] + _next[j]);
        }
    }
    var compacted = compact(summed);
    return compacted;
};

var compact = function(_xs) {
    if (_xs < 4) {
        return _xs;
    }
    var result = [_xs[0]];
    for (var i = 1; i < _xs.length - 1; i += 2) {
        result.push(_xs[i] > _xs[i + 1] ? _xs[i] : _xs[i + 1]);
    }
    result.push(_xs[_xs.length - 1]);
    return result;
};

var curr = [];
for (var i = 0; i < triangle.length; i++) {
    var next = triangle[i];
    var merged = merge(curr, next);
    curr = merged;
}
var max = 0;
for (var i = 0; i < curr.length; i++) {
    if (curr[i] > max) {
        max = curr[i];
    }
}
console.log('result: ' + max);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
