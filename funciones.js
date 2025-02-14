//Funciones

//Palabra reservada function
function Suma(a,b){ 
    let total = a+b;
    return total; //return nos permite guardar el resultado en una variable
}

//Llamar a la función

let resultado = Suma(10,10);
console.log(resultado); //Es exclusivo para el programador

console.log(Suma(10,10));
Suma(2,4); //Se ejectuta, pero no se imprime.

//Ejemplo 2
function saludar(nombre){
    console.log("Hola, bienvenido/a " + nombre);
}
saludar("Carolina");
saludar("Montserrat");

//Ejemplo 3
function Resta(a,b){
    let total = a-b;
    console.log(total); // console.log(); solo imprime el resultado en consola
}
Resta(13,2);

//Ejemplo 4

//Aquí no recibe parámetros, es decir, datos de entrada.
function casita(){
    console.log("Esta es una casita");
    let nombre = "Ana"; //Variable local
    let apellido = "Villanueva";
}
casita();

//Ejemplo de concatenación
let nombre = "Ana"; //Variable global
let edad = "23";
let ciudad = "CDMX";

//Forma antigua
console.log("Ella se llama " + nombre + " tiene " + edad + " años" + " vive en " + ciudad);
//Forma actualizada de la version ES6
console.log(`Ella se llama ${nombre} tiene ${edad} años y vive en ${ciudad}`); //Concatenación con comillas inversas

//Forma básica de solicitar datos al usuario

let gatos = prompt("¿Cuántos gatos tienes?");
let perros = prompt("¿Cuántos perros tienes?");

console.log(`Tienes ${gatos} gatos y tienes ${perros} perros`);

//Vemos lo datos en pop up
alert(`Tienes ${gatos} gatos y tienes ${perros} perros`);

//Vemos estos datos dentro del documento
document.write(`Tienes ${gatos} gatos y tienes ${perros} perros.`);



