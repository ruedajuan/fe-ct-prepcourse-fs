function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  const resultados = [];
  
  // Iterar 10 veces
  for (let i = 1; i <= 10; i++) {
    // Si la iteración es 5, se salta ese caso
    if (i === 5) {
      continue;
    }

    // Incrementar num en 2 y guardar el resultado en el arreglo
    num += 2;
    resultados.push(num);
  }

  // Retornar el arreglo con los resultados
  return resultados;
}

module.exports = continueStatement;
