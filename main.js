class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}

const gohan = new Producto(1, "Gohan", 850, "img/gohan.jpg");
const maki = new Producto(2, "Maki", 700, "img/maki.jpg");
const ramen = new Producto(3, "Ramen", 1020, "img/ramen.jpg");
const sushi = new Producto(4, "Sushi", 999, "img/sushi.jpg");

const productos = [gohan, maki, ramen, sushi];

let carrito = [];

console.log(productos);

const divContenedor = document.getElementById("divContenedor");

// MOSTRAR PRODUCTOS

productos.forEach((producto) => {
  const divMostrarProducto = document.createElement("div");
  divMostrarProducto.className = "caja";
  divMostrarProducto.innerHTML = `<div class="card" style="width: 18rem;">
                                  <img src=" ${producto.img} " class=" maxpoke " alt="...">
                                  <div class="card-body">
                                   <h5 class="${producto.nombre}">Card title</h5>
                                   <p class="card-text">Precio: ${producto.precio}</p>
                                   <a href="#" class="btn btn-primary" id = "boton${producto.id}">Añadir al Carrito</a>
                                  </div>
                                  </div>`;

  divContenedor.appendChild(divMostrarProducto);

  const boton = document.getElementById(`boton${producto.id}`);
  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
  });
});

//FUNCION AGREGAR AL CARRITO

const agregarAlCarrito = (id) => {
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    const producto = productos.find((producto) => producto.id === id);
    carrito.push(producto);
    console.log(carrito);
  }
};

// Mostrar carrito

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
  mostrarCarrito();
})

const mostrarCarrito = () => {
  carrito.forEach((producto) => {
    const mostrarCarrito = document.createElement("div")
    mostrarCarrito.innerHTML = ` <div>
                                  <img src=" ${producto.img}>
                                 <h3>${producto.nombre}</h3>
                                  <p>${producto.precio}</p>
                                  <p>${producto.cantidad}</p>
                                  </div>`

  contenerCarrito.appendChild(mostrarCarrito);                                
  })
}


