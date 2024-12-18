function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var porMay =  array.map(str=>{return str.toUpperCase()});
  return porMay;
}

module.exports = convertirStringAMayusculas;
