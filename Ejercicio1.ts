interface Pelicula {
    titulo: string;
    director: string;
    anyo: number;
    genero: string;
    calificacion: number;
}

let arrayPelis: Pelicula[] = [
    {
        titulo: "El señor de los anillos",
        director: "Peter Jackson",
        anyo: 2001,
        genero: "Fantasía",
        calificacion: 8
    },
    {
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        anyo: 1972,
        genero: "Drama",
        calificacion: 9
    },
    {
        titulo: "El Padrino II",
        director: "Francis Ford Coppola",
        anyo: 1974,
        genero: "Drama",
        calificacion: 9
    },
    {
        titulo: "El despertar de la fuerza",
        director: "J.J. Abrams",
        anyo: 2015,
        genero: "Ciencia Ficción",
        calificacion: 7
    }
];

function mostrarPelisGenero(arrayPelis: Array<any>, genero: string) {
    return arrayPelis.filter(peli => peli.genero === genero);
}

console.log(mostrarPelisGenero(arrayPelis, "Fantasía"));

function tresMejores(arrayPelis: Array<any>) {
    return arrayPelis.sort((peliA, peliB) => peliB.calificacion - peliA.calificacion).slice(0, 3);
}

console.log(tresMejores(arrayPelis));

function promedioCalificaciones(arrayPelis: Array<any>) {
    return arrayPelis.reduce((acc, peli) => acc + peli.calificacion, 0) / arrayPelis.length;
}

console.log(promedioCalificaciones(arrayPelis));

function actualizarCalificacion(arrayPelis: Array<Pelicula>, titulo: string, calificacion: number) {
    for (let i = 0; i < arrayPelis.length; i++) {
        if (arrayPelis[i].titulo === titulo) {
            arrayPelis[i].calificacion = calificacion;
        }
    }
}

