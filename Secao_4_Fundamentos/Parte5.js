const prod1={}

prod1.nome='celular'
prod1.preco=4900.99
prod1['desconto']= 0.40

console.log(prod1)

const prod2={
    nome :"Fernando",
    idade :10,
    prod :prod1,
    relogio:{
        nome:"seninha",
        preco:{
            real:500,
            desconto:0.4
        }
    }
}

console.log(prod2)

console.log(prod2.relogio.preco.real)