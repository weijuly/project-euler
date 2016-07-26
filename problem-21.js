console.log('https://projecteuler.net/problem=21');
var start = new Date();

var sumOfProperDivisors = function(_x) {
    var sum = 1;
    for (var i = 2; i <= _x / 2; i++) {
        if (_x % i === 0) {
            sum += i;
        }
    }
    return sum;
};
var numToSum = {};
for (var i = 3; i < 10000; i++) {
    numToSum[i.toString()] = sumOfProperDivisors(i).toString();
}
var amicablePairs = {};
var updatePairs = function(_key, _val) {
    var key = _key < _val ? _key : _val;
    var val = _key > _val ? _key : _val;
    if (key in amicablePairs) {
        return;
    }
    amicablePairs[key] = val;
};
for (var key in numToSum) {
    var val = numToSum[key];
    if (val == key) {
        continue;
    }
    if ((val in numToSum) && (numToSum[val] == key)) {
        updatePairs(key, val);
    }
}
var sum = 0;
for (var key in amicablePairs) {
    sum += (parseInt(key) + parseInt(amicablePairs[key]));
}

console.log(amicablePairs);
console.log('result: ' + sum);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
