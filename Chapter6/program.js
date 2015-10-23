{
    var a = 10;
    let b = 20;
    const tmp = a;
    a = b;
    b = tmp;
    // tmp = 30; 再代入不可

    console.log(a);
    console.log(b);
    console.log(tmp);
}

console.log(a);
//console.log(b);
//console.log(tmp);