function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
    // Convertir el string a minúsculas para hacer la comparación sin importar mayúsculas/minúsculas
    let cadena = string.toLowerCase();
  
    // Invertir el string usando split, reverse y join
    let cadenaInvertida = cadena.split('').reverse().join('');
  
    // Comparar el string original y el invertido
    return cadena === cadenaInvertida;
}

module.exports = esPalindromo;