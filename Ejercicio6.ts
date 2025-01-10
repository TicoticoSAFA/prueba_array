class Animal {
    especie: string;
    nombre: string;
    edad: number;
    habitat: string;

    constructor(especie: string, nombre: string, edad: number, habitat: string) {
        this.especie = especie;
        this.nombre = nombre;
        this.edad = edad;
        this.habitat = habitat;
    }

    cambiarHabitat(nuevoHabitat: string) {
        this.habitat = nuevoHabitat;
    }

    cumpleanos() {
        this.edad++;
    }

    toString() {
        return `Animal: ${this.nombre} | Especie: ${this.especie} | Edad: ${this.edad} | Habitat: ${this.habitat}`;
    }
}

class Zologico {
    animales: Animal[];

    constructor(animales: Animal[]) {
        this.animales = animales;
    }

    agregarAnimal(animal: Animal) {
        this.animales.push(animal);
    }

    animalesPorEspecie(especie: string): Animal[] {
        return this.animales.filter(animal => animal.especie === especie);
    }

    animalesPorHabitat(habitat: string): Animal[] {
        return this.animales.filter(animal => animal.habitat === habitat);
    }
}

// Crear instancias de Animal
const animal1 = new Animal('León', 'Simba', 5, 'Sabana');
const animal2 = new Animal('Elefante', 'Dumbo', 10, 'Selva');
const animal3 = new Animal('Tigre', 'Shere Khan', 7, 'Selva');
const animal4 = new Animal('Cebra', 'Marty', 4, 'Sabana');

// Crear una instancia de Zologico y agregar los animales
const zoologico = new Zologico([animal1, animal2, animal3, animal4]);

// Mostrar los animales del zoologico
console.log(zoologico.animales);

// Buscar animales por especie
console.log(zoologico.animalesPorEspecie('Tigre'));

// Buscar animales por habitat
console.log(zoologico.animalesPorHabitat('Selva'));

// Realizar operaciones con los animales
animal1.cambiarHabitat('Bosque');
animal2.cumpleanos();

// Mostrar el estado de los animales después de las operaciones
console.log(animal1.toString());
console.log(animal2.toString());