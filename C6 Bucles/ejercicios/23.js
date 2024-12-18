function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:


    if (numero <= 1) return false;
  

    if (numero <= 3) return true;
    

    if (numero % 2 === 0 || numero % 3 === 0) return false;
    

    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    
    return true;

}

module.exports = esNumeroPrimo;
