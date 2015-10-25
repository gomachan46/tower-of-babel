# アロー関数

アロー関数を使うと無名関数をより短く記述することが可能。

```javascript
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
```

上手く省略して記述してすっきりしたコーディングをしよう

# 問題

コマンドライン引数から任意の数の文字列を受け取り、最初の一文字だけを取得して、結合するための関数を作ってみましょう。

```javascript
    var inputs = process.argv.slice(2);
    var result = inputs.map(/* ここにアロー関数を使って一文字だけ取得しましょう */)
                       .reduce(/* ここにアロー関数を使って文字列結合しましょう */);
    console.log(result);
```

例えば、 ["Hello", "Arrow", "Function"] の場合、結果として "HAF" という文字列が得られれます。

```
    $ babel-node program.js Hi this is yosuke
    Htiy
```
