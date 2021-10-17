
// declarações

//Forma literal/ padraõ

function fun1(){
    console.log("FUN 1 Funcionado")
}

//Função em varivael

const fun2= function(){
    console.log("FUN 2 Funcionado")
}


// Armazenar num array

const array = [function (a,b){return a+b},fun1,fun2]

// Armazenar num atributo de um objeto

const obj ={};

obj.falar=function(){return "OPA"}

console.log(obj.falar())

//Passar uma função como parametro de função

function run(fun){
    fun()
}

run(fun1);

run(fun2);

// Uma função pode retornar/conter uma função

function estranhaSoma(a,b){
    return function (c){
        if(c){
            console.log(a+b+c)
        }else{
            console.log(a+b)
        }
        
    }
}


estranhaSoma(4,5)(1)

estranhaSoma(4,5)()

const estranha=estranhaSoma(4,5)

estranha()

estranha(1)
estranha(2)
estranha(3)






