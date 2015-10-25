setTimeout(()=>{console.log('Test');}, 100);

// (x) => {} で関数定義になる
// 今までだと var square = function (x) { return x * x; };
var square = (x) => {
    return x * x;
};
console.log(square(x));

// 引数が一つならカッコは省略可能。returnの一行しかbodyがないならreturnも省略可能

var square2 = x => x * x;
console.log(square2(x));
