function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var valor = Math.abs(num).toString().length;
  if(valor ===3 ) return true;
  else return false;
}

module.exports = tieneTresDigitos;
