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

    buscarCliente(id: number): Cliente {
        return this.clientes.find(cliente => cliente.id === id)[-1];
    }
}