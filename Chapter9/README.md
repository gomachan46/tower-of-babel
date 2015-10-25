# generator

みんあ大好きジェネレーターが、ES6では実装されている模様。

for-of文を作るときにIterableなオブジェクトを作ったが、多少工夫が必要だった。

ジェネレーターを使えば作りやすくなる。

```javascript
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
```

違いは以下。

* 関数に `function*` が入っている
* `return` の代わりに `yield` を使っている


挙動はいわゆるジェネレーターだと思うので省略。(関数が呼ばれるとyieldの箇所まで実行される的な)

# 問題

ではここで、先ほど作成した FizzBuzz 問題を generator で書き換えてみましょう。
