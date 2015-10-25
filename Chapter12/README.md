# RestパラメータとSpreadコール

可変長のパラメータを受け取る関数を実現する場合、これまでは`arguments`と呼ばれる配列らいくなオブジェクトを扱って実現していた。

あくまで配列ライクなので、reduceやmapといったメソッドが使えなくなってしまうデメリットがあった。

ES6は`arguments`を使わなくても引数に`...`をつけることで可変長パラメータの処理を実現できるようになった！

これがRestパラメータと呼ばれるもの。

```javascript
var sum = function(...args) {
    return args.reduce( (sum, n) => sum + n );
};

console.log(sum(1,2,3));
```

また、関数呼び出しの際に配列のオブジェクトを可変長パラメータに変換することも可能。

これがSpreadコールと呼ばれるもの。

```javascript
var array = [1, 2, 3, 4];

// arrayが可変長引数に展開されてからsumが呼び出される
console.log(sum(...array));
```

# 問題

JavaScript でこの可変長パラメータである Rest パラメータ呼び出しを使って、平均を取る関数を作ってみましょう。

```javascript
    var args = process.argv[2].split(",");
    args = args.map((arg)=> +arg);

    // ここに平均を取るavg関数を作る、作る際には
    // RESTパラメータを利用すること。

    console.log(avg(...args));
```
