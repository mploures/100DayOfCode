
// dados que são considerados verdadeiros em js
let isAtivo

console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!" texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo=10));


// dados que são considerados falsos em js

console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo=0));


////


let nome1=''
let nome2="Lucas"


console.log(nome1||"Desconhecido")
console.log(nome2||"Desconhecido")

