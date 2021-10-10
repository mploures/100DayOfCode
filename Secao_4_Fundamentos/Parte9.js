// Estudo do operador de Destructuring

const pessoa = {
    nome: 'ana',
    idade: 5,
    nivelFome: 10,
    pai: "fernando",
    endereco: {
        rua: "Rua ABC",
        numero: 12
    }
}

console.log(pessoa.nome, pessoa.idade)
console.log(pessoa)

const { nome, idade } = pessoa

console.log(nome, idade)
console.log(pessoa)


const { nome: n, idade: i } = pessoa


console.log(n, i)
console.log(pessoa)

const { sobrenome: sn, BemHumorada: bh = true } = pessoa

console.log(sn, bh)

const { endereco: { rua: r, numero: num, dia: d } } = pessoa

console.log(r, num, d)

console.log(pessoa)

const [a] = [10]
const [n1, , , n4, , n6 = 0, n10] = [1, 2, 3, 4, 5]

console.log(a)
console.log(n1, n4, n6, n10)


function randI({ min = 0, max = 1000 }) {
   
    //if(min>max) [min,max]=[max,min];
    let aux= Math.random.toString();
    
    let valor = aux.valor * (max - min) + min;

     console.log(aux)
    return Math.floor(valor);
}

const ob = {
    min: 0,
    max: 300,

}

const ob1 = {
    min: 90,
    max: 300,
    teste: 21
}

const ob2 = {
    min: 900,
    max: 300,
    teste: 21
}

const ob3 = {
    min: 90,
    teste: 21
}

const ob4 = {
    max: 300,
    teste: 21
}

console.log(randI({ min: 10, max: 20 }))





