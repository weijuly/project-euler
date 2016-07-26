console.log('https://projecteuler.net/problem=14');
var start = new Date();

var maxLength = 0;
var updateMax = function(_val, _i) {
    if (_val > maxLength) {
        maxLength = _val;
        console.log('max len: ' + _val + ' runner :' + _i);
    }
};

var collatz = function(_start) {
    var sequence = [_start];
    while (_start != 1) {
        if (_start % 2 === 0) {
            _start = _start / 2;
        } else {
            _start = 3 * _start + 1;
        }
        sequence.push(_start);
    }
    return sequence.length;
};

for (var i = 100; i < 1000000; i++) {
    var len = collatz(i);
    updateMax(len, i);
}

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
