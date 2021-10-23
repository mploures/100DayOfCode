const pessoa={
    nome: "Rebeca",
    idade: 15,
    peso:55

}

const help={
    sobrenome: "Fernanda",
    idade: 18,
    altura:1.65

}


console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))




Object.defineProperty(pessoa,"endereco",{
    enumerable:true,
    writable: false,
    value:"Rua ABC"
})

Object.entries(pessoa).forEach(e=>{
    console.log(e[0],":",e[1])
})

const pessoaV2=Object.assign(pessoa,help)

Object.entries(pessoaV2).forEach(e=>{
    console.log(e[0],":",e[1])
})