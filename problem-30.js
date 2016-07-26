console.log('https://projecteuler.net/problem=30');
var start = new Date();

var atoi = function(_digit) {
    return _digit.charCodeAt(0) - 48;
};

var digitPowerSum = function(_number, _power) {
    var digits = _number.toString();
    sum = 0;
    for (var i = 0; i < digits.length; i++) {
        sum += Math.pow(atoi(digits[i]), _power);
    }
    return sum;
};

var powersum = 0;

for (var i = 2; i <= 295245; i++) {
    var dps = digitPowerSum(i, 5);
    if (dps == i) {
        powersum += dps;
    }
}

console.log('result: ' + powersum);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
