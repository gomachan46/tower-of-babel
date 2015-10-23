# ブロックスコープ

let と const という新しい変数宣言ができるようになった。

これによって今までやっていたfunctionを駆使して頑張っていたスコープ表現だけではなくスコープが普通に作れるようになった

`{...}` といったように囲まれた領域はスコープが作られる。

letは再代入可能な変数で、constは再代入不可能な変数。(っていうか定数？)

```javascript
{
    var a = 10;
    let b = 20;
    const tmp = a;
    a = b;
    b = tmp;
    // tmp = 30; 再代入不可
    
    console.log(b);
    console.log(tmp);
}

console.log(a);
console.log(b);
console.log(tmp);
```

varで定義したものにかんしてはブロックスコープの外からでも参照可能になっている。(a)

b, tmpに関してはブロックスコープの外からは見えないようになっている

let/constをなるべく利用してスコープを意識した変数を作っていくこと。

varはよほど明確にスコープを意識せずに使いたい時だろうなぁ

# 問題

実際に let と const を使って期待の効果を実現してみましょう。

```javascript
    'use strict';
    // 変数 a はblockスコープの中でも外でも再代入可能な有効な変数です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討してください
    var|let|const a = 5;

    // 変数 b は再代入不可能な変数です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討してください
    var|let|const b = process.argv[2];

    if (a === 5) {
      // ここでの変数 c は再代入可能ですが、このblockの中でだけ有効な変数です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討してください。
      var|let|const c = 4;
      console.log(c);  // 4

      // ここでの変数 b はblockの中だけで有効な変数です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討してください。
      var|let|const b = 8;
      console.log(b); // 8
    }

    console.log(a); // 5
    console.log(b);
    try {
      // ここで cに対して値を変更してみましょう。
      c = 1000;
    } catch (e) {
      // c is not defined エラーが発生することを確認して下さい。
      console.log(e);
    }
```
