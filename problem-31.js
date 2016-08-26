console.log('https://projecteuler.net/problem=31');
var start = new Date();

var total = 200;
var aValue = 100;
var bValue = 50;
var cValue = 20;
var dValue = 10;
var eValue = 5;
var fValue = 2;
var gValue = 1;

var counter = 1;

for (var a = 0; a <= 2; a++) {
    var bRemain = (total - (a * aValue)) / bValue;
    for (var b = 0; b <= bRemain; b++) {
        var cRemain = (total - (a * aValue) - (b * bValue)) / cValue;
        for (var c = 0; c <= cRemain; c++) {
            var dRemain = (total - (a * aValue) - (b * bValue) - (c * cValue)) / dValue;
            for (var d = 0; d <= dRemain; d++) {
                var eRemain = (total - (a * aValue) - (b * bValue) - (c * cValue) - (d * dValue)) / eValue;
                for (var e = 0; e <= eRemain; e++) {
                    var fRemain = (total - (a * aValue) - (b * bValue) - (c * cValue) - (d * dValue) - (e * eValue)) / fValue;
                    for (var f = 0; f <= fRemain; f++) {
                        var gRemain = (total - (a * aValue) - (b * bValue) - (c * cValue) - (d * dValue) - (e * eValue) - (f * fValue)) / gValue;
                        for (var g = 0; g <= gRemain; g++) {
                            if ((a * aValue) + (b * bValue) + (c * cValue) + (d * dValue) + (e * eValue) + (f * fValue) + (g * gValue) == total) {
                                counter += 1;
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log('result: ' + counter);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
