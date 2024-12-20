function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   if (typeof callback === 'function') {
      return callback(string); // Aplica la función de callback si es válida
    } else {
      return string; // Retorna el string original si no hay callback
    }
}

module.exports = cambiarCadena;
