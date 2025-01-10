class Figura {
    calcularArea(): number {
        return 0;
    }
}

class Rectangulo extends Figura {
    lado1: number;
    lado2: number;

    constructor(lado1: number, lado2: number) {
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    calcularArea(): number {
        return this.lado1 * this.lado2;
    }
}

class Circulo extends Figura {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

function calcularAreas(figuras: Figura[]): number[] {
    return figuras.map(figura => figura.calcularArea());
}

// Ejemplo de uso
const figuras: Figura[] = [
    new Rectangulo(10, 5),
    new Circulo(7),
    new Rectangulo(3, 4),
    new Circulo(2)
];

const areas = calcularAreas(figuras);
console.log(areas); // [50, 153.93804002589985, 12, 12.566370614359172]