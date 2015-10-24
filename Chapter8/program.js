var fibonacci = {
    [Symbol.iterator]() {
        let currentValue = 0, nextValue = 1;
        return {
            next() {
                if (nextValue > 1000) return { done: true };
                [currentValue, nextValue] = [nextValue, currentValue + nextValue];
                return { done: false, value: currentValue };
            }
        }
    }
};

for (var n of fibonacci) {
    console.log(n);
}
