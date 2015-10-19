# tower-of-babelでES6を学んでみる

https://github.com/yosuke-furukawa/tower-of-babel

ES6をおべんきょうしたいなーと思っていたら素晴らしそうなのがあったのでやってみる

# tower-of-babelインストール

```
npm install tower-of-babel -g
```

```
tower-of-babel
```

CUIで非常に味のあるよさ気なアプリケーションが立ち上がる！

順番にやっていく

# babelのインストール

まずはbabelのインストール


```
npm install babel -g
```

これで`babel`と`babel-node`が有効になるらしい

# Hello Babel

スクリプトを用意

## program.js

```js
console.log('Hello Babel');
```

## プログラムの実行

いちいちコンパイルかけて実行、みたいなの面倒。そこでbabel-nodeですよ。

```
babel-node program.js
```

画面に`Hello Babel`と標準出力されたら成功！

# 問題

```
コマンドライン引数を受け取ってそれを、 Helloの後につける下記の プログラムを作成してください。

    var arg = process.argv[2];
    console.log(`Hello ${arg}`);

babel-node program.js babel を実行して実行結果を見てみてください。
実行が終わったら、 tower-of-babel verify program.js
```


## verify

```
Chapter1|master⚡ ⇒  (=GmG)/ < tower-of-babel verify question1.js

あなたの回答の評価結果（想定回答との比較結果）:

                回答内容                                想定回答
────────────────────────────────────────────────────────────────────────────────

   "Hello transpiler"                  ==    "Hello transpiler"
   ""                                  ==    ""

────────────────────────────────────────────────────────────────────────────────

✓ 回答内容は想定回答とマッチしました
これが正式な回答です（もしあなたの回答と比較してみたいならどうぞ）：

────────────────────────────────────────────────────────────────────────────────
    var arg = process.argv[2];
    console.log(`Hello ${arg}`);

────────────────────────────────────────────────────────────────────────────────


# おめでとう！

「BABEL SETUP」に対するあなたの回答は合格です！

/var/folders/z1/13nrqysj1d9clj8j3lcs_mvnw44fq2/T/_babel_46741/solution.js
あと11個のチャンレンジが残っています。
メニューを表示するには 'tower-of-babel' と入力してください。
```


うおー！すごい！
