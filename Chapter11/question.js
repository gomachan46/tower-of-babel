var inputs = process.argv.slice(2);
var result = inputs.map(c=>c[0]).reduce((pre, cur)=>pre+cur);

console.log(result);
