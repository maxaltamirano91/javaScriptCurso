
const banner = document.getElementById("banner");

setTimeout(() => {
  banner.innerHTML="";
},4000);



class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
    
  }
}

const gohan = new Producto(1, "Gohan", 850, "img/gohan.jpg");
const maki = new Producto(2, "Maki", 700, "img/maki.jpg");
const ramen = new Producto(3, "Ramen", 1020, "img/ramen.jpg");
const sushi = new Producto(4, "Sushi", 999, "img/sushi.jpg");
const postre1 = new Producto(5, "Frutilla" , 350 , "img/frutilla.jpg");
const postre2 = new Producto(6, "Chocolate" , 370 , "img/chocolate.jpg");
const postre3 = new Producto(7, "Helado " , 250 , "img/helado.jpg");
const postre4 = new Producto(8, "Torta" , 370 , "img/torta.jpg");
const coca = new Producto(9, "Coca-Cola" , 200 , "img/coca.jpg");
const jugo = new Producto(10, "Naranja" , 300 , "img/naranja.jpg");
const agua = new Producto(11, "Agua" , 370 , "img/agua.jpg");

const productos = [gohan, maki, ramen, sushi, postre1, postre2, postre3, postre4, coca, jugo, agua];

let carrito = [];




console.log(productos);

const divContenedor = document.getElementById("divContenedor");

// MOSTRAR PRODUCTOS EN STOCK
productos.forEach((producto) => {
  const divMostrarProducto = document.createElement("div");
  divMostrarProducto.className = "caja";
  divMostrarProducto.innerHTML = `<div class="card" style="width: 18rem;">
                                  <img src=" ${producto.img} " class=" maxpoke " alt="...">
                                  <div class="card-body">
                                   <h5 class="card-text">${producto.nombre}</h5>
                                   <p class="card-text">Precio: $${producto.precio}</p>
                                   <a href="#" class="btn btn-primary" id = "boton${producto.id}">Añadir al Carrito</a>
                                  </div>
                                  </div>`;



  divContenedor.appendChild(divMostrarProducto);

  //Agregar productos al carrito: 

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
    
  }
  console.log(carrito);
  calcularTotal();

  localStorage.setItem("carrito", JSON.stringify(carrito));

};







//////////////////////////////////////////mostrar carrito ////////////////////////////

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
  mostrarCarrito();
})

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach(producto => {
      const card = document.createElement("div");
      card.innerHTML = `
              <div class = "card" >
                     
                  <div class = "card-final" >
                      <h3 class="nombre"> ${producto.nombre} </h3>
                      <p class="precio">  $ ${producto.precio} </p>
                      <p class="cantidad"> cantidad ${producto.cantidad} </p>
                      <button class = "btn btn-primary" id="eliminar${producto.id}" > Eliminar</button>
                  </div>
              </div>`



      contenedorCarrito.appendChild(card);




      
      //Eliminar productos del carrito: 

      const boton = document.getElementById(`eliminar${producto.id}`);
      boton.addEventListener("click", () => {
          eliminarproducto(producto.id);
      })
  })
  calcularTotal();
}

//////////////////////////////////////////Eliminar producto ////////////////////////////


const eliminarproducto = (id) => {
  const producto = carrito.find(producto => producto.id === id)
  const guia = carrito.indexOf(producto);
  carrito.splice(guia,1);
  mostrarCarrito();

  //LocalStorage: 
  localStorage.setItem("carrito", JSON.stringify(carrito));
}





//////////////////////////////////////////Ver total ////////////////////////////




const total = document.getElementById("total");

const calcularTotal = () => {
    let pagototal = 0; 
    carrito.forEach( producto => {
        pagototal += producto.precio * producto.cantidad;
        
    })
    total.innerHTML = `$${pagototal}`;
}





if(localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}