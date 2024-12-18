function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      if (array[i] === num) {
        return i;  // Devuelve el índice si el elemento es encontrado
      }
    }
    return -1;  // Si no se encuentra el elemento, devuelve -1


}

module.exports = encontrarElemento;
