/* For
a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/

// a.
const palabras = ["teclado", "botella", "vino", "auriculares", "llaves"];
console.log("Ejercicio a \n");
for (let i = 0; i < palabras.length; i++) {
    console.log("Palabra:", palabras[i]);
}

// b.
console.log("\n---------------------------------\n");
console.log("Ejercicio b \n");
for (let i = 0; i < palabras.length; i++) {
    let palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    console.log("Palabra modificada:", palabraModificada);
}

// c.
console.log("\n---------------------------------\n");
console.log("Ejercicio c \n");
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
console.log("Cadena completa:", sentence.trim());

// d.
console.log("\n---------------------------------\n");
console.log("Ejercicio d \n");
const numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log("Array final:", numeros);

