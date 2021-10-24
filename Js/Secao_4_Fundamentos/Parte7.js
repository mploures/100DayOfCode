//Estudo sobre função

console.log(typeof Object)

class Produto {}

console.log(typeof Produto)


//-------------------------------------------------------------------------------------------------------------//

// função void
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(4,5)
imprimirSoma(5)
imprimirSoma(4,5,43,43,4)
imprimirSoma()
    

// função com retorno

function soma(a , b=1){
    return a+b;
}


console.log(soma(1))
console.log(soma(1,2))
console.log(soma())

//-------------------------------------------------------------------------------------------------------------//

const imprimir=function(a,b){
    console.log(a+b)
}

imprimir(2,3)

const somarArrow = (a,b)=>{
    return a+b
}
console.log(somarArrow(2,4))

const sub=(a,b)=>a-b

console.log(sub(2,4))

//-------------------------------------------------------------------------------------------------------------//


console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}

console.log(typeof Cliente)
console.log(typeof new Cliente)

console.log(typeof Produto)
console.log(typeof new Produto)





