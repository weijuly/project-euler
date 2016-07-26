console.log('https://projecteuler.net/problem=29');
var start = new Date();

var lookup = [];

var updateLookup = function(_power, _a, _b) {
    for (var i = 0; i < lookup.length; i++) {
        if (lookup[i][0] == _power) {
            return;
        }
    }
    lookup.push([_power, _a, _b]);
};

for (var i = 2; i <= 10; i++) {
    for (var j = 2; j < 7; j++) {
        var power = Math.pow(i, j);
        if (power <= 100) {
            console.log('power: ' + power);
            updateLookup(power, i, j);
        }
    }
}
console.log(lookup);

var reduce = function(_a, _b) {
    while (true) {
        var i = 0;
        for (i = 0; i < lookup.length; i++) {
            if (lookup[i][0] == _a) {
                _a = lookup[i][1];
                _b = lookup[i][2] * _b;
            }
        }
        if (i == lookup.length) {
            return [_a, _b];
        }
    }
};
var powers = [];

for (var i = 2; i <= 100; i++) {
    for (var j = 2; j <= 100; j++) {
        var reduced = reduce(i, j);
        var x = reduced[0];
        var y = reduced[1];
        var found = false;
        for (var k = 0; k < powers.length; k++) {
            if (powers[k][0] == x && powers[k][1] == y) {
                console.log('reduce: ' + i + ',' + j + ':' + x + ',' + y);
                found = true;
                break;
            }
        }
        if (!found) {
            powers.push([x, y]);
        }
    }
}

console.log('result: ' + powers.length);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
