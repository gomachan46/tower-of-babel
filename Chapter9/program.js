var hoge = 123;
var fuga = 456;

console.log(hoge);
console.log(fuga);

[fuga, hoge] = [hoge, fuga];

console.log(hoge);
console.log(fuga);

var pt = {x: 123, y: 456};
var {x, y} = pt;
console.log(x, y); // 123 456
