const soma = function(x,y){
    return x+y
}

const subtracao =(x,y)=>{
    return x-y
}

const imprimirOperacao = (x,y,op=soma)=>{
    console.log(op(x,y))
}



imprimirOperacao(1,2)

imprimirOperacao(1,2,soma)

imprimirOperacao(3,2,subtracao)


imprimirOperacao(3,2,(x,y)=>{
 return x*y
})