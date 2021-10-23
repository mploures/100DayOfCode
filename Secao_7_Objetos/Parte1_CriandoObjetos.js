// usando a notação literal

const obj1={};

// usando Object em JS

const obj2=new Object


console.log(obj2)

// Função construtura

function Produto(nome,valor,desconto){
    this.nome // atributo publico
    this.getAtributo2=()=>{
        return valor*(1-desconto)
    }
}

const p1 = new Produto("Lucas",10,0.1)

console.log(typeof p1)


// Função Factorry

function CriarFuncionario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30)*(30-faltas)
        }
    }
}

const f2 = CriarFuncionario("lucas",213213,12)

console.log(f2, f2.getSalario())

// Atraves de um JSON

const fromJSON1=JSON.parse('{"info": "Sou um Json"}')
/*
let request = new XMLHttpRequest();
request.open("GET", "/TesteJSON.json", false);
request.send(null)
const fromJSON2=JSON.parse(request.responseText)

console.log(fromJSON1)
*/
console.log(fromJSON1)