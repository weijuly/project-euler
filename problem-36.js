var _ = require('underscore');
console.log('https://projecteuler.net/problem=36');
var start = new Date();

var isPalindrome = function(_number) {
    var number = _number.toString();
    if (number.split('').reverse().join('') == number) {
        return true;
    }
    return false;
};

var isPalindromeBinary = function(_number) {
    var number = _number.toString(2);
    var reversed = number.split('').reverse().join('');
    if (reversed[0] != '0' && reversed == number) {
        return true;
    }
    return false;
};
var sum = 0;
for (var i = 1; i < 1000000; i++) {
    if (isPalindrome(i) && isPalindromeBinary(i)) {
        sum += i;
    }
}
console.log('result: ' + sum);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
