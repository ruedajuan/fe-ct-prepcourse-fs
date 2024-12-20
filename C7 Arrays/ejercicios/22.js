function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const resultados = [];
  
  // Usar un bucle para calcular los valores de la tabla del 6
  for (let i = 0; i <= 10; i++) {
    resultados.push(6 * i);
  }

  // Retornar el arreglo con los resultados
  return resultados;
}

module.exports = tablaDelSeis;
