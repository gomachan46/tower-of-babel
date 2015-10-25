let fibonacci = function*(){
    let currentValue = 0, nextValue = 1;
    while (currentValue < 1000) {
        [currentValue, nextValue] = [nextValue, currentValue + nextValue];
        yield currentValue;
    }
}();

for (var n of fibonacci) {
    console.log(n);
}
