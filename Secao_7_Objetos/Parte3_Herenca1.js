const c1={
    modelo:"F40",
    velMax:340
}
const c2={
    modelo:"V40",
    velMax:200
}




console.log(c1.__proto__)
console.log(c1.__proto__===Object.prototype)
console.log(c2.__proto__===Object.prototype)

console.log(Object.prototype.__proto__)