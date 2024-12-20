function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
   // Crear un nuevo arreglo para guardar los meses encontrados
   const mesesBuscados = [];
  
   // Recorrer el arreglo original
   for (let i = 0; i < array.length; i++) {
     if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
       mesesBuscados.push(array[i]);
     }
   }
 
   // Verificar si se encontraron los tres meses pedidos
   if (mesesBuscados.includes("Enero") && mesesBuscados.includes("Marzo") && mesesBuscados.includes("Noviembre")) {
     return mesesBuscados;
   } else {
     return "No se encontraron los meses pedidos";
   }
}

module.exports = mesesDelAño;
