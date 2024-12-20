function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
    // Iterar sobre cada número en la secuencia
    for (let i = 0; i < secuencia.length; i++) {
      // Verificar si el número es múltiplo de n
      if (secuencia[i] % n === 0) {
        return secuencia[i]; // Devolver el primer múltiplo encontrado
      }
    }
    
    return undefined; // Si no se encuentra ningún múltiplo
}

module.exports = encontrarPrimerMultiploDeN;