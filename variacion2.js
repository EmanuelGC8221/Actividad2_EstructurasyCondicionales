let tiempoTotal = 240;
let tiempoRestante = tiempoTotal;
let ciclo = 0;

for (let tiempo = 0; tiempo < tiempoTotal; tiempo += 50) {
    ciclo++;
    if (ciclo % 2 === 1) {
        tiempoRestante -= 50;
        console.log(`Ciclo ${Math.ceil(ciclo/2)}: Trabajar 50 minutos, Tiempo restante: ${tiempoRestante} minutos`);
    } else {
        let pausa = (ciclo/2) <= 3 ? 10 : 20;
        tiempoRestante -= pausa;
        console.log(`Ciclo ${ciclo/2}: Pausa de ${pausa} minutos, Tiempo restante: ${tiempoRestante} minutos`);
    }
}