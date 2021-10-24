// Estudo mais detalhado da diferença entre var e let
var a =20
let b =25
{
    
    var a = 10
    let b =15
    console.log(a)
    console.log(b)

}

console.log(a)
console.log(b)

for(var i=0;i<5;i++){
    console.log(i)
}

console.log(i)

for(let j=0;j<5;j++){
    console.log(j)
}

//console.log(j) -> não está definido

const fun=[]

for(var i=0;i<5;i++){
    fun.push(function(){
        console.log(i)
    })
}

fun[2]()
fun[4]()

const fun2=[]

for(let i=0;i<5;i++){
    fun2.push(function(){
        console.log(i)
    })
}

fun2[2]()
fun2[4]()


console.log(teste)
var teste=10
console.log(teste)