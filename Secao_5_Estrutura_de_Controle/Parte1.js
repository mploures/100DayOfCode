function soBoaNoticia(nota){
    if (nota>=7) {
        console.log("Parabens")
    }else{
        console.log("Não posso te falar nada")
    }
}

soBoaNoticia(8)

soBoaNoticia(5)

Number.prototype.entre=function(inicio,fim){
    return this>=inicio&&this<=fim
}

function Noticia(nota){
    if(nota.entre(9,20)){
        console.log( " Muito bom")
    }else if(nota.entre(5,9)){
        console.log(" bom")
    }else if(nota.entre(1,5)){
        console.log(" ruim")
    }else{
        console.log(" ta errado")
    }

}

Noticia(1)
Noticia(6)
Noticia(8)
Noticia(13)
Noticia(31)