console.log('https://projecteuler.net/problem=20');
var start = new Date();

var multiply = function(_x, _y) {
    var result = '';
    var lines = [];
    var c = 0;
    for (var i = _x.length - 1; i >= 0; i--) {
        var line = [];
        for (var z = 0; z < c; z++) {
            line.unshift('0');
        }
        var carry = 0;
        var xy = 0;
        for (var j = _y.length - 1; j >= 0; j--) {
            xy = (atoi(_x[i]) * atoi(_y[j])) + carry;
            if (xy >= 10) {
                carry = atoi(xy.toString()[0]);
                line.unshift(xy.toString()[1]);
            } else {
                carry = 0;
                line.unshift(xy.toString()[0]);
            }
        }
        if (carry > 0) {
            line.unshift(xy.toString()[0]);
        }
        lines.push(line.join(''));
        c++;
    }
    padded = normalize(lines);
    result = add(padded);
    return result;
};
var atoi = function(_digit) {
    return _digit.charCodeAt(0) - 48;
};
var normalize = function(_list) {
    var output = [];
    var max = _list[_list.length - 1].length;
    for (var i = 0; i < _list.length; i++) {
        var elem = _list[i].split('');
        while (elem.length < max) {
            elem.unshift('0');
        }
        output.push(elem.join(''));
    }
    return output;
};
var add = function(_list) {
    var output = [];
    var carry = 0;
    for (var i = _list[0].length - 1; i >= 0; i--) {
        var sum = carry;
        for (var j = 0; j < _list.length; j++) {
            sum += atoi(_list[j][i]);
        }
        var sumString = sum.toString();
        output.unshift(sumString[sumString.length - 1]);
        carry = Math.floor(sum / 10);
    }
    var result = output.join('');
    if (carry > 0) {
        result = carry.toString() + result;
    }
    return result;
};
var digitSum = function(_number) {
    var result = 0;
    for (var i = 0; i < _number.length; i++) {
        result += atoi(_number[i]);
    }
    return result;
};

var factorial = '1';
for (var i = 1; i < 101; i++) {
    factorial = multiply(factorial, i.toString());
}

var res = multiply('4', '5');
console.log('result: ' + digitSum(factorial));

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
