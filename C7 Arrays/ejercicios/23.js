function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  const resultados = [];

  // Bucle para iterar 10 veces
  for (let i = 1; i <= 10; i++) {
    num += 2; // Aumentar el número recibido en 2

    // Verificar si el valor actual coincide con la cantidad de iteraciones
    if (num === i) {
      return "Se interrumpió la ejecución";
    }

    // Guardar el valor actual en el arreglo
    resultados.push(num);
  }
  return resultados;

}

module.exports = breakStatement;
