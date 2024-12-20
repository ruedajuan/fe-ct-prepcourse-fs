function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
    // Verifica si la propiedad 'amigos' existe y es un arreglo, sino crea uno vacío
    if (!objetoUsuario.amigos) {
      objetoUsuario.amigos = [];
    }
    
    // Agrega el nuevo amigo al arreglo de amigos
    objetoUsuario.amigos.push(nuevoAmigo);
  
    // Retorna el objeto actualizado
    return objetoUsuario
}

module.exports = agregarAmigo;
