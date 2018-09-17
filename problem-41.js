/* jshint esversion: 6 */
console.log('https://projecteuler.net/problem=41');
const start = new Date();

const permute = _sequence => {
  if (_sequence.length == 0) {
    return [];
  }
  if (_sequence.length == 1) {
    return [_sequence];
  }
  let permutations = [];
  const [head, ...tail] = _sequence;
  permute(tail).map(x => {
    for (let i = 0; i <= x.length; i++) {
      let copy = x.slice();
      copy.splice(i, 0, head);
      permutations.push(copy);
    }
  });
  return permutations;
};

const isPrime = _num => {
  for (let i = 2; i < Math.sqrt(_num); i++) {
    if (_num % i == 0) {
      return false;
    }
  }
  return true;
}

const arrayToNumber = _x => parseInt(_x.reduce((x, y) => x + y, ''));
const bigger = (_x, _y) => _x > _y
  ? _x
  : _y;

let seq = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
];
while (true) {
  let big = permute(seq).map(arrayToNumber).filter(isPrime).reduce(bigger, 0);
  if (big != 0) {
    console.log(big);
    break;
  }
  seq.splice(-1, 1);
}

const end = new Date();
const difference = end.getTime() - start.getTime();
console.log('Start:     ' + start);
console.log('End:       ' + end);
console.log('Exec Time: ' + difference + ' msecs');
