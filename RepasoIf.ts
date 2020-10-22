//EJERCICIO1
function zodiaco(dia:number,mes:string):String{
    if((mes == "marzo" && dia >= 21) || (mes == "abril" && dia <= 19)){
        let respuesta = "Aries"
        return respuesta;
    }
    else if((mes == "abril" && dia >= 20) || (mes == "mayo" && dia <= 21)){
        let respuesta = "Tauro"
        return respuesta;
    }
    else if((mes == "mayo" && dia >= 21) || (mes == "junio" && dia <= 20)){
        let respuesta = "Geminis"
        return respuesta;
    }
    else if((mes == "junio" && dia >= 21) || (mes == "julio" && dia <= 22)){
        let respuesta = "Cancer"
        return respuesta;
    }
    else if((mes == "julio" && dia >= 23) || (mes == "agosto" && dia <= 22)){
        let respuesta = "Leo"
        return respuesta;
    }
    else if((mes == "agosto" && dia >= 23) || (mes == "septiembre" && dia <= 22)){
        let respuesta = "Virgo"
        return respuesta;
    }
    else if((mes == "septiembre" && dia >= 23) || (mes == "octubre" && dia <= 22)){
        let respuesta = "Libra"
        return respuesta;
    }
    else if((mes == "octubre" && dia >= 23) || (mes == "noviembre" && dia <= 21)){
        let respuesta = "Escorpio"
        return respuesta;
    }
    else if((mes == "noviembre" && dia >= 22) || (mes == "diciembre" && dia <= 21)){
        let respuesta = "Sagitario"
        return respuesta;
    }
    else if((mes == "diciembre" && dia >= 22) || (mes == "enero" && dia <= 19)){
        let respuesta = "Capricornio"
        return respuesta;
    }
    else if((mes == "enero" && dia >= 20) || (mes == "febrero" && dia <= 18)){
        let respuesta = "Acuario"
        return respuesta;
    }
    else if((mes == "febrero" && dia >= 19) || (mes == "marzo" && dia <= 20)){
        let respuesta = "Piscis"
        return respuesta;
    }
}
let prueba = zodiaco(24,"febrero");
console.log(prueba);



//EJERCICIO2
let pais:string = "Egipto";

if(pais == "Alemania" || pais == "Suiza" || pais == "Portugal" || pais == "Malta" || pais =="Serbia"){
    console.log("Europa");
}
else if(pais == "Jamaica" || pais == "Barbados" || pais == "Brasil" || pais == "Nicaragua" || pais == "Peru"){
    console.log("America")
}
else if(pais == "Japon" || pais == "Maldivas" || pais == "Pakistan" || pais == "Filipinas" || pais == "Camboya"){
    console.log("Asia")
}
else if(pais == "Burundi" || pais == "Egipto" || pais == "Camerun" || pais == "Seychelles" || pais == "Tunez"){
    console.log("Africa")
}
else if(pais == "Samoa" || pais == "Kiribati" || pais == "Fiyi" || pais == "Australia" || pais == "Palaos"){
    console.log("Oceania")
}


//EJERCICIO9
function par(numero:number){
    if(numero%2 ==0){
        console.log("El numero es par")
    }
    else{
        console.log("El numero es impar")
    }
}
par(3);
