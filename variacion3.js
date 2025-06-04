let inversion = 100
let dia = 1

do {
    let incrementoAdicional= dia % 3 === 0 ? 10:5
    inversion += 10 + incrementoAdicional;
    console.log(`Día ${dia}: Ganancia de $${10 + incrementoAdicional}, Total: $${inversion}`);
     if (inversion > 200) {
        console.log("El ahorro superó los $200, proceso detenido");
        break;
     }
    dia++
} while (dia <= 14);

console.log (`Ahorro total: $${inversion} `)
