let costoTotal = 0;

for (let dia = 1; dia <= 5; dia++) {

  let consumo = Math.floor(Math.random() * 10) + 1; 

  let costoDiario = consumo > 5 ? 3 : 1.5;

  costoTotal += costoDiario;

  console.log(`Día ${dia}: Consumo ${consumo} kWh, Costo: $${costoDiario}, Total: $${costoTotal}`);

  if (costoTotal > 12) {
    console.log("Costo total superó $12, deteniendo el monitoreo.");
    break;
  }
}

console.log(`Costo total final: ${costoTotal}`);