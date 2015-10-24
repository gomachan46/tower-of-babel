var prop = "hoge";
var obj = {
    [prop]: "fuga"
};

var obj2 = {
    [(()=>"hoge" + "fuga")()]: "foo"
};

console.log(obj);
console.log(obj2);
