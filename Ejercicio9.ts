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