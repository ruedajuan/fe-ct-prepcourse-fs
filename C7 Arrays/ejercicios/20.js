function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  var bool=true;
for (var i=0;i<array.length;i++){
  if(array[0]!== array[i]) bool=false;
}
return bool;
}

module.exports = todosIguales;
