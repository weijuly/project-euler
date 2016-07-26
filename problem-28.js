console.log('https://projecteuler.net/problem=28');
var start = new Date();

var sum = 1;
var i = 1;
var runner = 1;
while (true) {
    var spacer = 2 * i;
    for (var j = 0; j < 4; j++) {
        runner = runner + spacer;
        sum += runner;
    }
    if (spacer == 1000) {
        break;
    }
    i += 1;
}
console.log('result: ' + sum);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
