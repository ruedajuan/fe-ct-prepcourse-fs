function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var indice=0;
  var valor= array[0];
  for (var i=0;i<array.length;i++){
      if(array[i]>valor) {
        indice=i;
        valor=array[i];
      }
  }
  return indice;
}

module.exports = encontrarIndiceMayor;
