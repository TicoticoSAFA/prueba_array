class Vehiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    toString() {
        return `Vehículo: ${this.marca} ${this.modelo} | Año: ${this.ano}`;
    }
}

class Coche extends Vehiculo {
    puertas: number;

    constructor(marca: string, modelo: string, ano: number, puertas: number) {
        super(marca, modelo, ano);
        this.puertas = puertas;
    }

    toString() {
        return `Coche: ${this.marca} ${this.modelo} | Año: ${this.ano} | Puertas: ${this.puertas}`;
    }
}

class Moto extends Vehiculo {
    cilindrada: number;

    constructor(marca: string, modelo: string, ano: number, cilindrada: number) {
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }

    toString() {
        return `Moto: ${this.marca} ${this.modelo} | Año: ${this.ano} | Cilindrada: ${this.cilindrada}`;
    }
}

// Ejemplo de prueba para la clase Vehiculo
const vehiculo = new Vehiculo('Toyota', 'Corolla', 2020);
console.log(vehiculo.toString()); // Vehículo: Toyota Corolla | Año: 2020

// Ejemplo de prueba para la clase Coche
const coche = new Coche('Ford', 'Mustang', 2021, 2);
console.log(coche.toString()); // Coche: Ford Mustang | Año: 2021 | Puertas: 2

// Ejemplo de prueba para la clase Moto
const moto = new Moto('Yamaha', 'MT-07', 2019, 689);
console.log(moto.toString()); // Moto: Yamaha MT-07 | Año: 2019 | Cilindrada: 689