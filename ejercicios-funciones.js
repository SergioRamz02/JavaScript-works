//EJERCICIO 1
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {

    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// Llamadas a las funciones

console.log("Suma: " + sumar(5, 3));

console.log("Resta: " + restar(5, 3));

console.log("Multiplicación: " + multiplicar(5, 3));

console.log("División: " + dividir(5, 0));

console.log("Fin del programa");

//EJERCICIO 2
function celsiusAFahrenheit(celsius) {

    return (celsius * 9/5) + 32;

}

function fahrenheitACelsius(fahrenheit) {

    return (fahrenheit - 32) * 5/9;

}

// Llamadas a las funciones

console.log("20°C en Fahrenheit es: " + celsiusAFahrenheit(20));

console.log("68°F en Celsius es: " + fahrenheitACelsius(68));

console.log("Fin del programa");

//EJERCICIO 3 (Prueba)

let librosLeidos = [];// Arreglo que almacenara los titulos de los libros

//Función que agrega los libros
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

//Función que va a mostrar la lista de los libros

function mostrarLibros() {
    if (librosLeidos.length === 0) {
        console.log("No hs leído un libro");
    } else {
        //Genera la lista de los libros
        for (let i=0; i<librosLeidos.length; i++) { 
            console.log(librosLeidos[i]);
        }
    }
}
//Agregando titulos
agregarLibro("Estudio en Escarlata");
agregarLibro("Sherlock Holmes");
agregarLibro("Las adventuras de Sherlock Holmes");
agregarLibro("Las historias de Sherlock Holmes");
agregarLibro("Cartas Cruzadas");
agregarLibro("La Divina Comedia");

//Mostrando el arreglo
console.log(librosLeidos);

//Mostrando la lista
mostrarLibros();


