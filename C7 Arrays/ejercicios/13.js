function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var resultado=[];
  for (var i=0;i<array.length;i++){
    if(array[i]%2 === 0){
      resultado.push(array[i]);
    }
  }
  return resultado;
}

module.exports = filtrarNumerosPares;
