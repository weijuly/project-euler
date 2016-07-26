var _ = require('underscore');
console.log('https://projecteuler.net/problem=24');
var start = new Date();

// No comments ;-)

var jjj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
counter = 0;
for (var a = 0; a < jjj.length; a++) {
    var aa = jjj[a];
    var iii = _.without(jjj, aa);
    for (var b = 0; b < iii.length; b++) {
        var bb = iii[b];
        var hhh = _.without(iii, bb);
        for (var c = 0; c < hhh.length; c++) {
            var cc = hhh[c];
            var ggg = _.without(hhh, cc);
            for (var d = 0; d < ggg.length; d++) {
                var dd = ggg[d];
                var fff = _.without(ggg, dd);
                for (var e = 0; e < fff.length; e++) {
                    var ee = fff[e];
                    var eee = _.without(fff, ee);
                    for (var f = 0; f < eee.length; f++) {
                        var ff = eee[f];
                        var ddd = _.without(eee, ff);
                        for (var g = 0; g < ddd.length; g++) {
                            var gg = ddd[g];
                            var ccc = _.without(ddd, gg);
                            for (var h = 0; h < ccc.length; h++) {
                                var hh = ccc[h];
                                var bbb = _.without(ccc, hh);
                                for (var i = 0; i < bbb.length; i++) {
                                    var ii = bbb[i];
                                    var aaa = _.without(bbb, ii);
                                    for (var j = 0; j < aaa.length; j++) {
                                        var jj = aaa[0];
                                        counter += 1;
                                        if (counter == 1000000) {
                                            var number = aa + bb + cc + dd + ee + ff + gg + hh + ii + jj;
                                            console.log('result: ' + number);
                                            var end = new Date();
                                            console.log('Start:     ' + start);
                                            console.log('End:       ' + end);
                                            console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
                                            process.exit(0);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
}
