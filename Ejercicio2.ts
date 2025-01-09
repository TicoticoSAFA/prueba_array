class Plato{
    id: number;
    nombre: string;
    precio: number;
}
class Pedido{
    id: number;
    cliente: string;
    platos: Plato[];

    constructor(id: number, cliente:string, platos: Plato[]){
        this.id = id;
        this.cliente = cliente;
        this.platos = platos;
    }

    calcularTotal(): number{
        return this.platos.reduce((acc, plato) => acc + plato.precio, 0);
    }
}

class Restaurante{
    pedidos: Pedido[];

    constructor(pedidos: Pedido[]){
        this.pedidos = pedidos;
    }

    agregarPedido(pedido: Pedido){
        this.pedidos.push(pedido);
    }

    totalVentas(): number{
        return this.pedidos.reduce((acc, pedido) => acc + pedido.calcularTotal(), 0);
    }

    pedidosCliente(cliente: string): Pedido[]{
        return this.pedidos.filter(pedido => pedido.cliente === cliente);
    }

    pedidosMayorCantidad(cantidad:number): Pedido[]{
        return this.pedidos.filter(pedido => pedido.platos.length > cantidad);
    }
}
// Datos de prueba para la clase Plato
const plato1 = new Plato();
plato1.id = 1;
plato1.nombre = 'Plato 1';
plato1.precio = 10;

const plato2 = new Plato();
plato2.id = 2;
plato2.nombre = 'Plato 2';
plato2.precio = 20;

const plato3 = new Plato();
plato3.id = 3;
plato3.nombre = 'Plato 3';
plato3.precio = 30;

// Datos de prueba para la clase Pedido
const pedido1 = new Pedido(1, 'Cliente 1', [plato1, plato2]);
const pedido2 = new Pedido(2, 'Cliente 2', [plato3]);
const pedido3 = new Pedido(3, 'Cliente 1', [plato1, plato3]);

// Datos de prueba para la clase Restaurante
const restaurante = new Restaurante([pedido1, pedido2, pedido3]);

console.log(restaurante);

// Llamar a los métodos de la clase Pedido
console.log('Total del Pedido 1:', pedido1.calcularTotal());
console.log('Total del Pedido 2:', pedido2.calcularTotal());
console.log('Total del Pedido 3:', pedido3.calcularTotal());


// Agregar un pedido
const pedido4 = new Pedido(4, 'Cliente 3', [plato2, plato3]);
restaurante.agregarPedido(pedido4);

// Calcular el total de ventas
console.log('Total de ventas:', restaurante.totalVentas());

// Obtener pedidos de un cliente específico
console.log('Pedidos del Cliente 1:', restaurante.pedidosCliente('Cliente 1'));

// Obtener pedidos con mayor cantidad de platos que un número específico
console.log('Pedidos con más de 1 plato:', restaurante.pedidosMayorCantidad(1));