function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
    // Itera sobre cada usuario en el arreglo
    for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
      // Cambia la propiedad 'esPremium' a true
      objetoMuchosUsuarios[i].esPremium = true;
    }
    
    // Retorna el arreglo modificado
    return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;
