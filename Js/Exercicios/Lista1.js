/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/
console.log("1...")
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
console.log("2...")
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

console.log("3...")
const pow=(a,b,tipo)=>{
    a=isNaN(a)?1:a
    b=isNaN(b)?1:b

    let prod=1;
    for (let index = 0; index <b; index++) {
        prod*=a
        
    }

    //console.log(tipo)
    if(tipo==undefined){
        console.log(prod)
    }else{
        return prod
    }
    
}


pow(2,2)

pow(3,7)

pow()

pow("a",2)



/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

console.log("4...")
const divisao= (a,b)=>{
    console.log("inicio")
    a=isNaN(a)?1:a
    b=isNaN(b)?1:b

    if(b==0){
        b=1
        console.log("não há divisão por zero")
    }

    let resultado=Math.trunc(a/b);
    let resto=a-(b*resultado);
    

  


    console.log(resultado)
    console.log(resto)
    console.log("fim")
}


divisao()
divisao(10,1)
divisao(10,5)

divisao(13,5)

divisao(12,"a")



/*
Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

*/

console.log("5...")
const showMoney= (val)=>{
    val=isNaN(val)?1:val

    let inteira = Math.trunc(val)
    let decimal = ((val%1).toFixed(2)*100).toFixed(0)


    console.log("R$"+inteira+","+decimal);


}


showMoney(132.21)
showMoney(13.921)
showMoney(1.3921)
showMoney(0.13921)
showMoney()


/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

console.log("6...")

const jurosSimples=(capital,taxa,tempo)=>{
    console.log(capital+(capital*taxa*tempo))
}

const jurosCompostos = (capital,taxa,tempo)=>{
    console.log(capital*(pow(1+taxa,tempo,"existe")))
}



jurosSimples(100,0.02,10)
jurosCompostos(100,0.02,10)


/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.


*/

console.log("7...")

const Bhaskara=(a,b,c)=>{
    a=isNaN(a)?1:a
    b=isNaN(b)?1:b
    c=isNaN(c)?1:c

    let delta= (b*b)-(4*a*c)

    if(delta>=0){
        let resp=[]

        resp[1]=(-b-Math.sqrt(delta))/(2*a)

        resp[2]=(-b+Math.sqrt(delta))/(2*a)




        return resp

    }else{
        return "Delta é negativo"
    }



}

console.log(Bhaskara(1,2,3))
console.log(Bhaskara(-2,2,3))
console.log(Bhaskara(1,2,1))
console.log(Bhaskara(31,55,1))


/*
Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)


*/

console.log("8...")

const Jogador = (vet)=>{

    let record=0
    let menor=100000
    let maior=0
    let pmenor=0
    let pos=0
    for(i in vet){
        if(i>maior){
            record++
        }

        if (i<menor) {
            pmenor=pos
        }

        pos++
    }

    return [record,pmenor]
}


console.log(Jogador([10,20,20,8,25,3,0,30,1,76,-4,5,80]))