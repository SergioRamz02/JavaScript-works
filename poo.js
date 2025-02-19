// 1. Abstracción: Definir la clase, es decir, usar una plantilla de una figura geométrica.

class Figura {
    constructor(color){ //El método constructor se asegura de que los objetos tengan las propiedades necesarias para funcionar
       this.color = color;
    }
    //Métodos: Son las acciones que podemos hacer respecto a la clase
    calcularArea(){
        throw new Error("El método no ha sido implementado");
    }
    obtenerColor(){
        return this.color; //This nos permite asignar a cada figura su propio valor
    }
}

// 2. Herencia: Creamos sub-clases específicas a partir de la clase padre

class Circulo extends Figura{
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }
}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

class Triangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base * this.altura / 2;
    }
}

//Crear los objetos: Vamos a asignar valores (Instanciar).

const miCirculo = new Circulo("Morado", 14);
const miRectangulo = new Rectangulo("Verde", 12, 6);
const miTriangulo = new Triangulo("Rojo", 5, 6);

console.log("Color del Círculo:", miCirculo.obtenerColor());
console.log("Color del rectángulo:", miRectangulo.obtenerColor());
console.log("Color del Triangulos:", miTriangulo.obtenerColor());

//4. Polimorfismo: Un objeto puede hacer el mismo trabajo de forma diferente

function mostrarArea (figura){
    console.log(figura.calcularArea());
}

mostrarArea(miCirculo);
mostrarArea(miRectangulo);
mostrarArea(miTriangulo);


