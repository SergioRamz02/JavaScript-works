// Tipo de mascotas = Gato, Perro, Hamster

//Condicionales (Jaula mediana, Jaula grande, Jaula pequeña)

let tipoDeMascota = "Elefante";

if (tipoDeMascota === "Perro"){
console.log("Si tienes un perro necesitas una jaula grande");
}else if (tipoDeMascota === "Gato"){
    console.log("Si tienes un gato necesitas la jaula mediana");
}else if(tipoDeMascota === "Hamster"){
console.log("Si tienes un hamster necesitas la jaula pequeña");
}else{//Es el bloque falso sino se cumple ninguan de las anteriores
    console.log("No contamos con jaulas para esa mascota");
}

//Problema del semáforo
//Rojo = Alto, Verde = pase, Amarillo = Detente

let luzDeSemaforo = "Rojo";

if (luzDeSemaforo === "Verde"){
    console.log("Siga");
    }else if (luzDeSemaforo === "Amarillo"){
        console.log("Detente");
    }else if(luzDeSemaforo === "Rojo"){//Es el bloque falso sino se cumple ninguan de las anteriores
        console.log("Alto");
    }else{
        console.log("No es correcto");
    }

//Ejemplo de campus

let edad = 17;

let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {

   console.log("Puedes conducir");

} else {
   console.log("No puedes conducir");
}

//Ejemplo de Beca

let creditos = 8; //Mínimo de creditos
let promedio = 8.5; //Minimo de promedio

if (creditos >= 10 && promedio >= 8.5){
    console.log("Tinenes derecho a una Beca");
}else if (creditos < 10 && promedio >= 8.5){
    console.log("Te hace falta créditos");
}else if (creditos >= 10 && promedio < 8.5){
    console.log("Tu promedio debe subir");
}else{
    console.log("No tienes derecho a una beca");
}
//Agregar el mensaje de te hace falta creditos
//Agregar el mensaje de tu promedio debe subir
