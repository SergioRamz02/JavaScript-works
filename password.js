const span = document.querySelector("#pass_gen");
const range = document.querySelector("#dificultad");
const tag = document.querySelectorAll("div");

const letters = "adcdefghijklmnopqrstuvwxyz"; //Este estring funciona como un arreglo
const mayus = letters.toUpperCase();
const numbers = "0123456789";
const special = "#$%/&+*.()[]";

const allValues = letters + mayus + numbers + special;

const genPass = () => {
    span.innerText = "generando contraseña";
    let accumulatePass ="";
    
    for(let i =0; i< range.value; i++){
        const seed = Math.floor(Math.random()*allValues.length); //Math.random genera un numero decimal menor a 1
        accumulatePass += allValues[seed];
    }
    span.innerText = accumulatePass;
    copyToClip(accumulatePass);
}

function copyToClip (pass){
    if(pass === "") return ; //En caso de que pass este vacío
    navigator.clipboard.writeText(pass); //Aplicación del navegador
}

