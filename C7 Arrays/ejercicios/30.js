function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        return numeros[i]; // Primer elemento repetido encontrado
      }
    }
  }

}

module.exports = encontrarElementoRepetido;