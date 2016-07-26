console.log('https://projecteuler.net/problem=17');
var start = new Date();

var english = function(_num) {
    var words = '';
    if (_num >= 100) {
        hundreds = Math.floor(_num / 100);
        words = words + unit(hundreds) + 'hundred';
        _num = _num % 100;
        if (_num > 0) {
            words = words + 'and';
        } else {
            return words;
        }
    }
    if (_num < 20) {
        words = words + '' + unit(_num);
    } else {
        ten = Math.floor(_num / 10);
        words = words + '' + tens(ten);
        _num = _num % 10;
        if (_num === 0) {
            return words;
        }
        words = words + '' + unit(_num);
    }
    return words;
};
var unit = function(_num) {
    switch (_num) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
};

var tens = function(_num) {
    switch (_num) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
};
var count = 0;
for (var i = 1; i < 1000; i++) {
    count += english(i).length;
}
count += 'onethousand'.length;
console.log('result: ' + count);

var end = new Date();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + (end.getTime() - start.getTime()) + ' msecs');
