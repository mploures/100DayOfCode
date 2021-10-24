// Estudo sobre number

let peso1 =1.1
let peso2 =2.0
let peso3= Number(1.45)


console.log(peso1+" "+Number.isInteger(peso1))
console.log(peso2+" "+Number.isInteger(peso2))
console.log(peso3+" "+Number.isInteger(peso3))

const ava1= 3.1
const ava2= 8.432

let total= ava1*peso1+ava2*peso2 - peso3
let media= total/(peso1+peso2 - peso3)

console.log("media = " + media.toFixed(2))


console.log(7/0)
console.log("10"/2)
console.log("10,312"/2)
console.log("Show"*2)
console.log(0.1+0.7)
//console.log(10.toFixed(2)) Não é suportado
console.log((10.3123).toFixed(2))

const raio=31;
const area = Math.PI * Math.pow(raio,2);

console.log(typeof(Math))

console.log(typeof(Math.PI))

console.log(typeof(Math.pow))

console.log(area)


