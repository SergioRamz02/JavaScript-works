//Practica 3: Clasificación de frutas
console.log("Practica 3: Clasificación de frutas");

let frutas = ["manzana", "naranja", "uva","uva"]; //Arreglo de frutas

//Agregando elementos al arreglo frutas
frutas.push("manzana"); 
frutas.push("manzana");
frutas.push("manzana");
frutas.push("manzana");
frutas.push("naranja");
frutas.push("naranja");
frutas.push("naranja");
frutas.push("uva");
frutas.push("uva");

let manzana =0; //Inicializando el contador de manzana
let naranja =0; //Inicializando el contador de naranja
let uva =0; //Inicializando el contador de uva

for(let i=0; i<frutas.length; i++){
    if(frutas[i] === "manzana"){
        manzana++;
    }else if(frutas[i] === "naranja"){
        naranja++;
    }
    else if(frutas[i] === "uva"){
        uva++;
    }
}
console.log("Cantidad de manzanas:" + manzana);
console.log("Cantidad de naranjas:" + naranja);
console.log("Cantidad de uvas:" + uva);

//Versión creada por el sensei
console.log("Versión desarrollada por la sensei Ana");

//Declarar un arreglo llamado frutascon varios tipos de frutas
let Frutas = ["Manzana","Plátano", "Kiwi", "Plátano", "Manzana", "Manzana", "Kiwi"];

//Crear un objeto para almacenar la cantidad de cada tipo
let conteoFrutas ={};

//Usar un ciclo for para recorrer el arreglo y contar las frutas
for(let i=0; i< Frutas.length; i++){
    let fruta = Frutas[i];
    if(conteoFrutas[fruta]){
        //Si la fruta ya existe, incrementar el contador
        conteoFrutas[fruta]++;
    }else{
        conteoFrutas[fruta]=1;
        //Si la fruta no existe, inicializar el contador en 1
    }
}

//Imprimer en la consola la cantidad de cada tipo de fruta
console.log("Conteo de frutas usando ciclo for");
for (let fruta in conteoFrutas){
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}