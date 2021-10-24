
function CriarPessoa(nome="Ana",idade=10){

    return {
        nome: nome,
        idade:idade,
        Nacionalidade : "Brasil"
    }
}

console.log(CriarPessoa())

console.log(CriarPessoa("Pedro"))

console.log(CriarPessoa("Felipe",90))

p1=CriarPessoa();

p1.fome=102

console.log(p1)