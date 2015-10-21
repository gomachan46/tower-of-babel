# モジュール化

今まではモジュール化の構造はなかったけれど、遂にサポートされたらしい。

そのための構文が `export` と `import` 。

# export

オブジェクトをimport出来るようにする。

export側は以下のようにする。

```javascript
// Message.js
export const message = 'Hello Babel';
```

# import

exportされたものをimportする。

```javascript
import {message} from './Message';
console.log(message); // Hello Babel
```

これで標準でいい感じにファイル分割、モジュール分割できるぞい:)

# 問題

ここで、以下のcommonjsで書かれたモジュールを ES6 の module で書き換えてみましょう。

```javascript
    exports.PI = 3.141592;

    var _sqrt = function(s, x, last){
      return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
    };
    exports.sqrt = function(s){
      return _sqrt(s, s/2.0, 0.0);
    };
    exports.square = function(x) {
      return x * x;
    };

    var arg1 = process.argv[2];
    var arg2 = process.argv[3];
    var PI = require('./Math').PI;
    var sqrt = require('./Math').sqrt;
    var square = require('./Math').square;

    console.log(PI);
    console.log(sqrt(+arg1));
    console.log(square(+arg2));
```

# メモ

import {var1, var2, var3} みたいな感じで複数一括importも可能

色々書いてあったのでこの記事を見る
http://qiita.com/inuscript/items/41168a50904242005271

exportされていた物を全てimportするには

```javascript
import * as 名前 from '参照元'
```

みたいにしてあげる。

そうすると問題で言うと`Math.PI`みたいにアクセスできるようになる

exportはclassとかもいけるので、PHPでいうuseみたいなのが出来るようになってくる。

```javascript
import Hoge from '継承元クラス定義`;

class Fuga extends Hoge {
}
```

みたいなのができる。

普通だ！
