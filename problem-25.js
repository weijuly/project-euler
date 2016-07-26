console.log('https://projecteuler.net/problem=25');
var start = new Date();

var fibonaccis = ['1', '1'];

var atoi = function(_digit) {
    return _digit.charCodeAt(0) - 48;
};

var add = function(_x, _y) {
    while (_x.length != _y.length) {
        if (_x.length > _y.length) {
            _y = '0' + _y;
        } else {
            _x = '0' + _x;
        }
    }
    var result = '';
    var carry = 0;
    for (var i = _x.length - 1; i >= 0; i--) {
        var num = atoi(_x[i]) + atoi(_y[i]) + carry;
        if (num >= 10) {
            num = num - 10;
            carry = 1;
        } else {
            carry = 0;
        }
        result = num.toString() + result;
    }
    if (carry == 1) {
        result = '1' + result;
    }
    return result;
};

while (true) {
    var i = fibonaccis.length - 1;
    var j = i - 1;
    var next = add(fibonaccis[i], fibonaccis[j]);
    fibonaccis.push(next);
    if (next.length == 1000) {
        console.log('result: ' + fibonaccis.length);
        break;
    }
}

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
