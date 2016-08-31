console.log('https://projecteuler.net/problem=34');
var start = new Date();

var fmap = {
    '0': 1,
    '1': 1,
    '2': 2,
    '3': 6,
    '4': 24,
    '5': 120,
    '6': 720,
    '7': 5040,
    '8': 40320,
    '9': 362880
};

var digitFSum = function(_number) {
    var digits = _number.toString();
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
        sum += fmap[digits[i]];
    }
    return sum;
};

var sum = 0;
for (var i = 10; i < 362880; i++) {
    if (i == digitFSum(i)) {
        sum += i;
    }
}
console.log('result: ' + sum);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
