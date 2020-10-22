//EJERCICIO3
function impares(n:number){
    for(let i=0; i<n; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
impares(7);


//EJERCICIO4
let arr:number[] = [];

function revertir(arr:number[]){
    for(let i=0; i<arr.length/2; i++){
        let temporal = arr[i];
        let indiceContrario = arr.length - i -1;
        arr[i] = arr[indiceContrario];
        arr[indiceContrario] = temporal;

    }
    console.log(arr)
}
revertir([3,2,9,7,8]);

//EJERCICIO5
let arr:string[] = [];

function arcoiris(arr:string[]){

    for(let i=0; i<arr.length; i++){
        let contiene = new Array();
        if(arr[i] == "Rojo" || arr[i] == "Naranja" ||arr[i] == "Amarillo" ||arr[i] == "Verde" ||arr[i] == "Azul" ||arr[i] == "Violeta"){
            contiene.push("si");
        }
        else{
            contiene.push("no");
        }
        console.log(contiene);
    }
}

arcoiris(["Rojo","Rosa","Verde"]);



//EJERCICIO6
let datos:number[] = [];

function par(datos:number[]){

    for(let i=0; i<datos.length; i++){
        if(datos[i]%2==0){
            console.log("Es número par");
        }
        else{
            console.log("No es número par");
        }
    }
}

par([8,4,7]);


//EJERCICIO7
let nombres:string[] = [];

function names(nombres){
    for(let i=0; i<nombres.length; i++){
        if(nombres[i].includes("M")){
            console.log("OK")
        }
        else{
            console.log("NO")
        }
        
    }
}

names(["Mario","Rosa","Manuel"]);


//EJERCICIO8
function suma(valores:string[]){
    let resultado:number = 0;

    for(let i=0; i<valores.length; i++){
        resultado+=valores[i].length
    }
    return resultado;
}

suma(["hola","adios"]);

//EJERCICIO10
let array1:string[] = ["Casa","Coche","Ciudad","Cesta"];
let array2:string[] = ["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"];
let array3:string[] = ["Venezuela","Veneno","Voltaje"];


function suma(valores:string[]){
    let resultado:number = 0;

    for(let i=0; i<valores.length; i++){
        resultado+=valores[i].length
    }
    return resultado
} 

function par(numero:number){
    if(numero%2 ==0){
        console.log("El numero es par")
    }
    else{
        console.log("El numero es impar")
    }
}



let resultado1 = suma(array1)
par(resultado1);

let resultado2 = suma(array2)
par(resultado2);

let resultado3 = suma(array3)
par(resultado3);
