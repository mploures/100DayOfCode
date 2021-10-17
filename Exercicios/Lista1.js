/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

const opercoes= (a=1,b=1)=>{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log("Fim");
}

opercoes(4,2)
opercoes(4)
opercoes()


/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

const TipoTriangulo=(a=1,b=1,c=1)=>{
    a=isNaN(a)?1:a
    b=isNaN(b)?1:b
    c=isNaN(c)?1:c


    if(a==b && b==c){
        console.log("Equilátero");
    }else if(a!=b && a!=c && b!=c){
        console.log("Escaleno");
    }else{
        console.log("Isósceles");
    }
}


TipoTriangulo();
TipoTriangulo(1,2,3)
TipoTriangulo(1,1,2)
TipoTriangulo(3,4,5)
TipoTriangulo("a",2,7)



/*
Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

const pow=(a,b)=>{
    a=isNaN(a)?1:a
    b=isNaN(b)?1:b

    let prod=1;
    for (let index = 0; index <b; index++) {
        prod*=a
        
    }

    console.log(prod)
}


pow(2,2)

pow(3,7)

pow()

pow("a",2)



/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/



/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/