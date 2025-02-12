//Ejercicio 1 de ciclo while
//Programa para mostrar los multiplos de 5 hasta un número dado por el usuario

let numero = 30;
let contador = 1;

while(contador <= numero){
    //Código a iterar
    if(contador % 5 === 0){
        console.log(contador);
    }
    contador++; //Incremento del contador
}

//contador = contador + 1 -> contador++
//contador = contador - 1 -> contador--
console.log("Fin del programa");


//Programa para ver los numeros impares
let num = 35;
for(let i=0; i<=num; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}
console.log("Fin del programa");

//Imprimer los numero del 1 al 10

let inicio = 0;

while(inicio<=10){
    console.log(inicio);
    inicio++;
}
console.log("Fin del programa");

for(let index=0; index<=10; index++){
    console.log(index); //Imprimiendo el valor actual de index
}
console.log("Fin del programa");

