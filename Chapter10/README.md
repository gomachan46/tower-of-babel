# デストラクチャリング

和訳すると分配束縛。

値をswapするときなどに、今までは一時変数に入れてから値を交換していたが、これからはもっと簡単にswapできるようになる。

```javascript
var hoge = 123;
var fuga = 456;

[fuga, hoge] = [hoge, fuga];
```

中身を評価してから代入できるようになった、っていうイメージかな？

Objectの値を取得するのにも利用可能

```javascript
var pt = {x: 123, y: 456};
var {x, y} = pt;
console.log(x, y); // 123 456
```

# 問題

以下のJSONを デストラクチャリングを使って name.family と birth.day を取得してみましょう。

```javascript
    var json = {
      "name": {
        "first": "Yosuke",
        "family": process.argv[2]
      },
      "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
      }
    };
    // ここでデストラクチャリングを使ってname.familyをfamilyNameに。
    // birth.day を birthDay に束縛してください。


    console.log(familyName);
    console.log(birthDay);
```

# メモ

正式な回答例が面白かったのでメモ

```javascript
var {name: {family: familyName}, birth: {day: birthDay}} = json;
```

このようにかくとjson.name.familyがfamilyNameに代入されて、json.birth.dayがbirthDayに代入される。ほえ〜
