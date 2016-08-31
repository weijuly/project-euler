console.log('https://projecteuler.net/problem=40');
var start = new Date();

var atoi = function(_digit) {
    return _digit.charCodeAt(0) - 48;
};

var number = '';
var runner = 1;
while (number.length < 1000000) {
    number = number + runner.toString();
    runner += 1;
}
console.log('result:' + atoi(number[0]) * atoi(number[9]) * atoi(number[99]) * atoi(number[999]) * atoi(number[9999]) * atoi(number[99999]) * atoi(number[999999]));

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
