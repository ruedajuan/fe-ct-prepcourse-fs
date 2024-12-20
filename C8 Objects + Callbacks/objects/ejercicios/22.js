function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   // Comprobamos si los dos strings tienen la misma longitud
  if (str1.length !== str2.length) return false;

  // Convertimos ambos strings en arreglos y los ordenamos
  let arreglo1 = str1.split('').sort().join('');
  let arreglo2 = str2.split('').sort().join('');

  // Comparamos los dos strings ordenados
  return arreglo1 === arreglo2;
}

module.exports = esAnagrama;
