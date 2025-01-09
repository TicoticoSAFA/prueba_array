interface Dia {
    fecha: string;
    temperatura: number;
    humedad: number;
    precipitaciones: number;
}

let arrayDias: Dia[] = [
    {
        fecha: "01/01/2021",
        temperatura: 20,
        humedad: 80,
        precipitaciones: 50
    },
    {
        fecha: "02/01/2021",
        temperatura: 22,
        humedad: 85,
        precipitaciones: 0
    },
    {
        fecha: "03/01/2021",
        temperatura: 18,
        humedad: 75,
        precipitaciones: 0
    },
    {
        fecha: "04/01/2021",
        temperatura: 24,
        humedad: 90,
        precipitaciones: 0
    },
    {
        fecha: "05/01/2021",
        temperatura: 25,
        humedad: 95,
        precipitaciones: 90
    }
];

function promedioTemperaturas(dias: Dia[]): string {
    return dias.reduce((acc, dia) => (acc + dia.temperatura), 0) / dias.length + "ºC";
}

console.log(promedioTemperaturas(arrayDias))

function diasLluvia(dias: Dia[]): Dia[] {
    return dias.filter(dia => dia.precipitaciones > 0)
}

console.log(diasLluvia(arrayDias))

function temperaturaAlta(dias: Dia[]): Dia {
    const sortedDias = dias.sort((a, b) => a.temperatura - b.temperatura);
    return sortedDias[sortedDias.length - 1];
}

console.log("El día con la temperatura más alta es: ")
console.log(temperaturaAlta(arrayDias))

function resumen(dias: Dia[]): string {
    let diasLluviosos = diasLluvia(dias).length;
    let temperaturaPromedio = promedioTemperaturas(dias);
    let maxTemperatura = temperaturaAlta(dias);

    return `Resumen: 
 Días lluviosos: ${diasLluviosos}
 Temperatura promedio: ${temperaturaPromedio}
 Máxima temperatura: ${maxTemperatura.temperatura}ºC el día ${maxTemperatura.fecha}`
}

console.log(resumen(arrayDias))