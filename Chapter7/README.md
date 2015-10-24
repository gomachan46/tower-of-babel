# COMPUTED PROPERTY

ES6からはオブジェクトリテラルの記述方式が少し変わるらしい。

オブジェクトのプロパティ名に式を評価させることができるようになるらしい。

```javascript
var prop = "hoge";
var obj = {
    [prop]: "fuga"
};
```

式を評価可能なので、関数を作って中で実行することもできる

```javascript
var obj = {
    [(()=>"hoge" + "fuga")()]: "foo"
};

Computed Propertyを上手く使えば冗長な記述をせずにすっきり書けそう。

もちろん変に使い過ぎると処理の追いづらいコードになりうるので節度を持って、という感じか。

# 問題

以下のオブジェクトを Computed Property を使って書き換えてみましょう。

```javascript
    var evenOrOdd = +process.argv[2];
    var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
    var sum = +process.argv[3] + evenOrOdd;
    var obj = {};
    obj[evenOrOddKey] = evenOrOdd;
    obj[sum] = sum;
    console.log(obj);
```

可能であれば、一時変数を全く使わずに表現してみてください。
