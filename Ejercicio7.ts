const productos = [
    { nombre: "Manzana", precio: 5, categoria: "alimentos" },
    { nombre: "Cereal", precio: 12, categoria: "alimentos" },
    { nombre: "Detergente", precio: 15, categoria: "limpieza" },
    { nombre: "Shampoo", precio: 8, categoria: "higiene" },
];

function productosMasDiez(productos) {
    return productos.filter(producto => producto.precio > 10.0);
}

console.log(productosMasDiez(productos));

function promedioPorCategoria(productos, categoria) {
    const productosCategoria = productos.filter(producto => producto.categoria === categoria);
    return productosCategoria.reduce((acc, producto) => acc + producto.precio, 0) / productosCategoria.length ;
}

console.log(promedioPorCategoria(productos, "alimentos"));

const productosConDescuento = productos.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9
}));

console.log(productosConDescuento);

console.log(productosMasDiez(productosConDescuento));

console.log(promedioPorCategoria(productosConDescuento, "alimentos"));