console.log('https://projecteuler.net/problem=9');
var start = new Date();

for (var c = 1000; c > 0; c--) {
    for (var b = c - 1; b > 0; b--) {
        for (var a = b - 1; a > 0; a--) {
            if (a + b + c != 1000) {
                continue;
            }
            if (a * a + b * b == c * c) {
                console.log('a' + a + 'b' + b + 'c' + c);
                break;
            }
        }
    }
}



var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
