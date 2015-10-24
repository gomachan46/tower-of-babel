const max = +process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let currentValue = 1;
        return {
            next() {
                if (currentValue > max) return { done: true };
                let result = '';
                if (currentValue % 3 == 0) result += 'Fizz';
                if (currentValue % 5 == 0) result += 'Buzz';
                if (result == '') result = currentValue;
                currentValue++;
                return { done: false, value: result }
            }
        }
    }
};

for (var n of FizzBuzz) {
    console.log(n);
}
