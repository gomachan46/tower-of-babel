var sum = function(...args) {
    return args.reduce( (sum, n) => sum + n );
};

console.log(sum(1,2,3));

var array = [1, 2, 3, 4];

// arrayが可変長引数に展開されてからsumが呼び出される
console.log(sum(...array));


