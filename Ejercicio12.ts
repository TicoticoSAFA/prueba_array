class Pago {
    procesarPago() {
        console.log("Procesando pago...");
    }
}

class PagoConTarjeta extends Pago {
    procesarPago() {
        console.log("Procesando pago con tarjeta...");
    }
}

class PagoConPaypal extends Pago {
    procesarPago() {
        console.log("Procesando pago con PayPal...");
    }
}

function procesarPagos(pagos: Pago[]) {
    pagos.forEach(pago => pago.procesarPago());
}

// Ejemplo de uso
const pagos: Pago[] = [
    new PagoConTarjeta(),
    new PagoConPaypal(),
    new PagoConTarjeta()
];

procesarPagos(pagos);
// Output:
// Procesando pago con tarjeta...
// Procesando pago con PayPal...
// Procesando pago con tarjeta...