class Cliente {

    id: number;
    nombre: string;
    saldo: number;

    constructor(id, nombre, saldo) {
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
    }

    realizarDeposito(cantidad: number) {
        this.saldo += cantidad;
    }

    realizarRetiro(cantidad: number) {
        if (cantidad > this.saldo) {
            console.log("No tienes suficiente saldo");
            return;
        }
        this.saldo -= cantidad;
    }

    toString() {
        return `Cliente: ${this.nombre} | saldo: ${this.saldo}€`;
    }
}

class Banco {
    clientes: Cliente[];

    constructor(clientes: Cliente[]) {
        this.clientes = clientes;
    }

    agregarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    buscarCliente(id: number): Cliente | undefined {
        return this.clientes.find(cliente => cliente.id === id);
    }

    saldoTotal(): number {
        return this.clientes.reduce((acc, cliente) => acc + cliente.saldo, 0);
    }


}

// Crear instancias de Cliente
const cliente1 = new Cliente(1, 'Juan Pérez', 1000);
const cliente2 = new Cliente(2, 'María García', 2000);
const cliente3 = new Cliente(3, 'Carlos Sánchez', 1500);

// Crear una instancia de Banco y agregar los clientes
const banco = new Banco([cliente1, cliente2, cliente3]);

// Mostrar los clientes del banco
console.log(banco.clientes);

// Buscar un cliente por ID
console.log(banco.buscarCliente(2));

// Realizar operaciones con los clientes
cliente1.realizarDeposito(500);
cliente2.realizarRetiro(300);

// Mostrar el estado de los clientes después de las operaciones
console.log(cliente1.toString());
console.log(cliente2.toString());

// Mostrar el saldo total del banco
console.log(banco.saldoTotal());
