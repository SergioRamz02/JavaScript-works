
let verduras = ["lechuga", "tomate", "cebolla", "jitomate","papa","pimiento"]; //Arreglo con datos

console.log(verduras[2]);
console.log(verduras.length);

console.log("Imprimiendo lista de verduras con for");
for(let i=0; i<verduras.length; i++){
    console.log(verduras[i]);
}

console.log("Métodos de arreglos");

let personas = []; //Arreglo vacío
personas.push("Ana"); //Agrega al final
personas.push("Sergio");
personas.push("Diego");
personas.push("Marcela");

console.log(personas);

personas.pop(); //Elimina el ultimo elemento

console.log(personas);

personas.unshift("Alex"); //Agrega al inicio
console.log(personas);

personas.shift(); //Elimina el primero
console.log(personas);

personas[1] = "Mónica"; //Modificando lo que esta en i=1
console.log(personas);

//Practica 3: Clasificación de frutas
console.log("Practica 3: Clasificación de frutas");

let frutas = ["manzana", "naranja", "uva","uva"]; //Arreglo de frutas

frutas.push("manzana"); //Agregando elemento al arreglo
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
