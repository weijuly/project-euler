console.log('https://projecteuler.net/problem=19');
var start = new Date();

var runner = new Date(1901, 0, 1, 0, 0, 0, 0);
var limit = new Date(2000, 11, 31, 0, 0, 0, 0);

var count = 0;
while (true) {
    var weekday = runner.toString().substring(0, 3);
    var begin = runner.toString().substring(8, 10);
    if (weekday == 'Sun' && begin == '01') {
        count += 1;
    }
    runner.setDate(runner.getDate() + 1);
    if (runner > limit) {
        break;
    }
}
console.log('result: ' + count);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
