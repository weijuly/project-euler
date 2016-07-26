var shell = require('child_process').execSync;
console.log('https://projecteuler.net/problem=26');
var start = new Date();

var max = 0;
var number = 0;
var update = function(_runner, _length) {
    if (max < _length) {
        max = _length;
        number = _runner;
    }
};

var cycle = function(_sequence) {
    for (var i = 1; i < _sequence.length / 2; i++) {
        if ((_sequence[i] == _sequence[2 * i]) && (_sequence.substr(0, i) == _sequence.substr(i, i))) {
            return i;
        }
    }
    return 0;
};

for (var i = 7; i < 1000; i++) {
    var sequence = shell('echo "scale=5000;1/' + i + '" | bc')
        .toString()
        .replace(/(\r\n|\n|\r)/gm, '')
        .replace('.', '')
        .replace(/\\/g, '')
        .substr(10);
    var length = cycle(sequence);
    update(i, length);
}

console.log('result: ' + number);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
