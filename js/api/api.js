import { funcion_boton } from "../main.js";

const api_productos = async () => {
    try {
        const response = await fetch("http://localhost:https://github.com/BrujaBajista/ProyectoFinalAlvarezQuintanaOrdiz/blob/main/js/api/apiproductos.json/Productos");
        const datos = await response.json();
        const productos_json = document.getElementById("productosjson");
        datos?.map(({ imagen, alt, nombre, precio }) => {
        const div = document.createElement("div");

        const producto_imagen = document.createElement("img");
        producto_imagen.src = imagen;
        producto_imagen.alt = alt;
        producto_imagen.className = "imagenes-productos-v";
        div.appendChild(producto_imagen);

        const producto_nombre = document.createElement("h3");
        producto_nombre.innerHTML = nombre;
        producto_nombre.className = "nombre-productos";
        div.appendChild(producto_nombre);

        const producto_precio = document.createElement("p");
        producto_precio.innerHTML = `$${precio}`;
        producto_precio.className = "precio-productos";
        div.appendChild(producto_precio);

        const producto_boton = document.createElement("button");
        producto_boton.innerHTML = "Agregar al Carrito";
        producto_boton.className = "agregar-carrito";
        div.appendChild(producto_boton);

        productos_json.appendChild(div);
        });

        let cargar_boton = document.createElement("button");
        cargar_boton.className = "cargar-mas";
        cargar_boton.innerHTML = "Cargar Mas Productos"
        productos_json.appendChild(cargar_boton);
        
        funcion_boton();
    } catch (error) {
        Toastify({
        text: "Ha ocurrido un error",
        duration: 2000,
        position: "center",
        className: "notificacion_error",
        style: {
            borderRadius: "27px",
            fontWeight: "bold",
            color: "#000000",
            background: "linear-gradient(to right, #ff8846, #ffdb46)",
        },
        }).showToast();
    }
};

api_productos();


