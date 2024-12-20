function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // Convertir el string en un array de caracteres
  let caracteres = texto.split('');
  
  // Invertir el array de caracteres
  let caracteresInvertidos = caracteres.reverse();

  // Unir el array invertido en un nuevo string
  let textoInvertido = caracteresInvertidos.join('');

  return textoInvertido;
}

module.exports = invertirTexto;
