function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if(a<b){
    var resultado=a;
    for(var i=a+1;i<b+1;i++){
      resultado= resultado*i;

    }
    return Math.abs(resultado);
  }
  else{
    var resultado=b;
    for(var i=b+1;i<a+1;i++){
      resultado= resultado*i;


    }
    return Math.abs(resultado);
  }
}

module.exports = productoEntreNúmeros;