function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  // Verificar si el array está vacío
  if (numeros.length === 0) return null;

  // Encontrar el rango mínimo y máximo en la secuencia
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);

  // Iterar desde el mínimo hasta el máximo y buscar el número faltante
  for (let i = min; i <= max; i++) {
    if (!numeros.includes(i)) {
      return i; // Retornar el número faltante
    }
  }

  return null; // Si no hay números faltantes
}

module.exports = encontrarNumeroFaltante;