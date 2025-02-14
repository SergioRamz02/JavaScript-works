// Declaro mi arreglo vacio

let librosLeidos = [];

//Declaro mi función agregarLibros

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

agregarLibro("El principito");
agregarLibro("Las mujeres que amaban demasiado");
agregarLibro("Cartas Cruzadas");

//Mostrar los libros leidos

function mostrarLibros(){
    for(i=0; i<librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
}

// Tenemos que llamar a la función

mostrarLibros();

console.log("...................");

agregarLibro("Las adventuras de Sherlock Holmes");
agregarLibro("La Divina Comedia");
mostrarLibros();