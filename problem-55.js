var _ = require('underscore');
console.log('https://projecteuler.net/problem=55');
var start = new Date();

var isPalindrome = function(_number) {
    if (_number.split('').reverse().join('') == _number) {
        return true;
    }
    return false;
};

var isLychrel = function(_number) {
    var number = _number.toString();
    for (var i = 0; i < 50; i++) {
        number = (parseInt(number) + parseInt(number.split('').reverse().join(''))).toString();
        if (isPalindrome(number)) {
            return true;
        }
    }
    return false;
};



var count = 0;
for (var i = 10; i < 10000; i++) {
    if (!isLychrel(i)) {
        count += 1;
    }
}

console.log('result', count);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
