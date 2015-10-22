# exportとdefault export

default exportなんていうものがあったのか！！！

default exportは、importの対象を{...}で囲んだりする必要はなく、デフォルトでexportされる。

なのでimportする側は名前を指定せずともimportが可能になる。

## export側

```javascript
    // Message.js
    const greeting = 'Hello';
    const name = 'Babel';
    const version = 'v5.0';
    export default {
      greeting: greeting,
      name: name,
      version: version
    };
```

default exportと呼ばれているけど、構文はexport default。

## import側

```javascript
    import Message from './Message';
    console.log(Message.greeting + ' ' + Message.name + ' ' + Message.version); //Hello Babel v5.0gtgtgt
```

namespaceのuseにより似た感じになった気がする。

# メモ

前回やってた`import * as Math`でも似たような事ができてた気がするけど、まぁあれだとdefaultにしてないのもごっそり持ってくる感じになるからまた別かな
