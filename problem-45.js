var _ = require('underscore');
console.log('https://projecteuler.net/problem=45');
var start = new Date();

var triangles = [];
var pentagons = [];
var hexagons = [];

for (var i = 286; i < 100000; i++) {
    var t = i * (i + 1) / 2;
    triangles.push(t);
}
for (var i = 165; i < 100000; i++) {
    var p = i * (3 * i - 1) / 2;
    pentagons.push(p);
}
for (var i = 143; i < 50000; i++) {
    var h = i * (2 * i - 1);
    hexagons.push(h);
}
for (var i = 0; i < triangles.length; i++) {
    var t = triangles[i];
    if (_.contains(pentagons, t) && _.contains(hexagons, t)) {
        console.log('result: ' + t);
        break;
    }
}

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
