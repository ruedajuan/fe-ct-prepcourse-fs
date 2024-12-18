function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

   
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

   
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;

}

module.exports = ordenarArray;
