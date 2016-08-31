var _ = require('underscore');
console.log('https://projecteuler.net/problem=43');
var start = new Date();

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var sum = 0;
for (var a = 0; a < numbers.length - 1; a++) {
    var bLeft = _.without(numbers, numbers[a]);
    for (var b = 0; b < bLeft.length; b++) {
        // 2 chars
        var cLeft = _.without(bLeft, bLeft[b]);
        for (var c = 0; c < cLeft.length; c++) {
            // 3 chars
            var dLeft = _.without(cLeft, cLeft[c]);
            for (var d = 0; d < dLeft.length; d++) {
                // 4 chars - 3 last
                var n = parseInt(bLeft[b] + cLeft[c] + dLeft[d]);
                if (n % 2 !== 0) {
                    continue;
                }
                var eLeft = _.without(dLeft, dLeft[d]);
                for (var e = 0; e < eLeft.length; e++) {
                    var n = parseInt(cLeft[c] + dLeft[d] + eLeft[e]);
                    if (n % 3 !== 0) {
                        continue;
                    }
                    var fLeft = _.without(eLeft, eLeft[e]);
                    for (var f = 0; f < fLeft.length; f++) {
                        var n = parseInt(dLeft[d] + eLeft[e] + fLeft[f]);
                        if (n % 5 !== 0) {
                            continue;
                        }
                        var gLeft = _.without(fLeft, fLeft[f]);
                        for (var g = 0; g < gLeft.length; g++) {
                            var n = parseInt(eLeft[e] + fLeft[f] + gLeft[g]);
                            if (n % 7 !== 0) {
                                continue;
                            }
                            var hLeft = _.without(gLeft, gLeft[g]);
                            for (var h = 0; h < hLeft.length; h++) {
                                var n = parseInt(fLeft[f] + gLeft[g] + hLeft[h]);
                                if (n % 11 !== 0) {
                                    continue;
                                }
                                var iLeft = _.without(hLeft, hLeft[h]);
                                for (var i = 0; i < iLeft.length; i++) {
                                    var n = parseInt(gLeft[g] + hLeft[h] + iLeft[i]);
                                    if (n % 13 !== 0) {
                                        continue;
                                    }
                                    var jLeft = _.without(iLeft, iLeft[i]);
                                    //console.log(jLeft);
                                    //j = jLeft[0];
                                    var n = parseInt(hLeft[h] + iLeft[i] + jLeft[0]);
                                    if (n % 17 !== 0) {
                                        continue;
                                    }
                                    var sp = parseInt(numbers[a] + bLeft[b] + cLeft[c] + dLeft[d] + eLeft[e] + fLeft[f] + gLeft[g] + hLeft[h] + iLeft[i] + jLeft[0]);
                                    sum += sp;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log('result: ' + sum);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
