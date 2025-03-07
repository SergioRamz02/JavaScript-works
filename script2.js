//Los arreglos son para guardar un conjunto de objetos (elementos)
let frutas = ["uva", "uva", "pera", "pera", "fresa"];

//Un objeto es la representación de las propiedades del objeto
const contador = {
    uva: 0,
    pera: 0,
    fresa: 0
}

//Ciclo para iterar a lo largo de la longitud del arreglo cuando concemos el contenido
for(let i = 0; i < frutas.length; i++){
    const currentfruta = frutas[i];
    if(currentfruta === "uva"){
        contador.uva += 1;
    } 
    if(currentfruta == "pera"){
        contador.pera = contador.pera + 1;
    }
    if(currentfruta === "fresa"){
        contador.fresa = contador.fresa + 1;
    }
}
console.log(contador);

//Estructa independiente a los objetos que hay en el arreglo
const contador1 ={}

//Ciclo for sin conocer los nombres o elementos del arreglo
for(let i = 0; i < frutas.length; i++){
    const currenfrutas = frutas[i];
    
    //Evalua una condición ya sea falasa o verdadera
    if(contador1[currenfrutas]){
        contador1[currenfrutas] +=1; //Aqui lo que se hace es agregar el elemento del arreglo al objeto vacío
    }else{
        contador1[currenfrutas] = 1;
    }
}
console.log(contador1);

//For of ->En cada interacción trae el valor de cada elemento

/* for(fruta of frutas){
    if(fruta[frutas]){
        fruta[frutas] +=1; //Aqui lo que se hace es agregar el elemento del arreglo al objeto vacío
    }else{
        fruta[frutas] = 1;
    }
} */
