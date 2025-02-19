document.addEventListener("DOMContentLoaded", () =>{
    const productoInput = document.getElementById("producto");
    const agregarButton = document.getElementById("agregar");
    const listaCompras = document.getElementById("lista-compras");

/*GetElementById */
    let productos =[];

    agregarButton.addEventListener("click", ()=>{
        const nombreProducto = productoInput.value.trim();
        if(nombreProducto){
            const nuevoProducto = {
                nombre: nombreProducto,
                comprado: false
            };
            productos.push(nuevoProducto);
            agregarProductoALista(nuevoProducto, listaCompras);
            productoInput.value = "";
        }
    })
});

function agregarProductoALista(producto){
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = producto.nombre;
    listaCompras.appendChild(nuevoItem);
}