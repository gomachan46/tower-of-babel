# イテレーター　for of

ES6から新しく `for of` というfor文の拡張が追加された。

```javascript
    var res = [];
    for (let element of [1, 2, 3]) {
        res.push(element * element);
    }
    console.log(res); // [1, 4, 9]
```

ofに渡すものはコレクションに限らず、Iterableなものであれば何でも繰り返すことが可能。

Iterable なものを作るには Symbol.iteratorを使う。

作り方はこんな感じ。


```javascript

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
```

# 問題

ではここで、 Iterable なオブジェクトを作成し、for-ofループで回してみましょう。1から始まり、コマンドライン引数に受け取った数までカウントするFizzBuzz 問題を作って for-of ループで回しましょう。

# ヒント

## FizzBuzz問題

1からXまでの数をプリントするプログラムを書け。ただし3の倍数のときは数の代わりに「Fizz」と、5の倍数のときは「Buzz」とプリントし、3と5両方の倍数の場合には「FizzBuzz」とプリントすること。

FizzBuzzは下記のように作ります。

    const max = process.argv[2];
    let FizzBuzz = {
      [Symbol.iterator]() {
        // ここに FizzBuzzの計算を書く
        // ヒント：
        // 計算を継続させたい時、つまり終了条件である繰り返し回数が max を超えていない時は
        // done: false のオブジェクトを返却する。
        // 逆に終了条件をみたすときには done: true のオブジェクトを返却する。
      }
    }

    for (var n of FizzBuzz) {
      console.log(n);
    // 1
    // 2
    // Fizz
    // 4
    // Buzz
    // Fizz
    // 7
    // 8
    // Fizz
    // Buzz
    // 11
    // Fizz
    // 13
    // 14
    // FizzBuzz
    // 16
    // 17
    // Fizz
    // 19
    // Buzz
    // Fizz
    // 22
    // 23
    // Fizz
    // Buzz
    // 26
    // Fizz
    // 28
    // 29
    // FizzBuzz
    // ...
    }

