function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var resultado=0;
  for (var i=0;i<array.length;i++){
    if(array[i]> 10){
      resultado++;
    }
  }
  return resultado;
}


module.exports = contarElementosMayoresA10;
