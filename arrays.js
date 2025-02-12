
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