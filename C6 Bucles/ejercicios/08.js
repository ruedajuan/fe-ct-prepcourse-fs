function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   if (a ===0) return false;
   else if (a<10 && a>0) return true;
   else return false;
}

module.exports = esPositivoOInferiorA10;
