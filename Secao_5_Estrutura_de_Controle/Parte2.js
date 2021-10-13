
function Noticia(nota){

    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("muito Bom")    
            break;
        case 8:
        case 7:
            console.log("Divertido")    
            break;
        
        case 6:
        case 4:
        case 5:
        console.log("Ruim")    
                    break;
    
        default:
            console.log("Desiste")   
            break;
    }





}

Noticia(1)
Noticia(6)
Noticia(8)
Noticia(13)
Noticia(31)