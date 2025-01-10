class Empleado {
    nombre: string;
    apellido: string;
    salario: number;

    constructor(nombre: string, apellido: string, salario: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
    }

    mostrarDetalles() {
        console.log(`Nombre Completo: ${this.nombre} ${this.apellido} | Salario: ${this.salario}`);
    }
}

class EmpleadoTiempoCompleto extends Empleado {

    horasExtras: number;

    constructor(nombre: string, apellido: string, salario: number, horasExtras: number) {
        super(nombre, apellido, salario);
        this.horasExtras = horasExtras;
    }

    mostrarDetalles() {
        console.log(`Empleado de Tiempo Completo: ${this.nombre} ${this.apellido} | Salario: ${this.salario}`);
    }

    calcularSalario() {
        return this.salario + this.horasExtras * 40;
    }
}

class EmpleadoPorHoras extends Empleado {

    tarifaPorHora: number;

    constructor(nombre: string, apellido: string, salario: number, horasTrabajadas: number) {
        super(nombre, apellido, salario);
        this.tarifaPorHora = horasTrabajadas;
    }

    mostrarDetalles() {
        console.log(`Empleado por Horas: ${this.nombre} ${this.apellido} | Salario: ${this.salario}`);
    }

    calcularSalario() {
        return this.salario * this.tarifaPorHora;
    }
}

// Ejemplo de prueba para la clase Empleado
const empleado = new Empleado('Juan', 'Pérez', 3000);
empleado.mostrarDetalles(); // Nombre Completo: Juan Pérez | Salario: 3000

// Ejemplo de prueba para la clase EmpleadoTiempoCompleto
const empleadoTiempoCompleto = new EmpleadoTiempoCompleto('Ana', 'García', 4000, 10);
empleadoTiempoCompleto.mostrarDetalles(); // Empleado de Tiempo Completo: Ana García | Salario: 4000
console.log(empleadoTiempoCompleto.calcularSalario()); // 4400

// Ejemplo de prueba para la clase EmpleadoPorHoras
const empleadoPorHoras = new EmpleadoPorHoras('Luis', 'Martínez', 20, 160);
empleadoPorHoras.mostrarDetalles(); // Empleado por Horas: Luis Martínez | Salario: 20
console.log(empleadoPorHoras.calcularSalario()); // 3200