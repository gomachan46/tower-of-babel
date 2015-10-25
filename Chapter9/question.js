const max = +process.argv[2];
let fizzBuzz = function*() {
    for (let i = 1; i <= max; i++) {
        let result = '';
        if (i % 3 == 0) result += 'Fizz';
        if (i % 5 == 0) result += 'Buzz';
        if (result == '') result = i;
        yield result;
    }
}();

for (var n of fizzBuzz) {
    console.log(n);
}