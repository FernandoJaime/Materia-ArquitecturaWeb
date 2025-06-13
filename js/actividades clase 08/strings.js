/* Strings
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

// a.
console.log("Ejercicio a \n");

let str1 = "al menos 10 caracteres";
console.log("Original:", str1);
console.log("Mayúsculas:", str1.toUpperCase());

// b.
console.log("\n---------------------------------\n");
console.log("Ejercicio b \n");
console.log("Los primeros 5 caracteres son:", str1.substring(0, 5));

// c.
console.log("\n---------------------------------\n");
console.log("Ejercicio c \n");
console.log("Los últimos 3 caracteres son:", str1.substring(str1.length - 3));

// d.
console.log("\n---------------------------------\n");
console.log("Ejercicio d \n");
let str2 = str1.substring(0, 1).toUpperCase() + str1.substring(1).toLowerCase();
console.log("Primera letra mayúscula:", str2);

// e.
console.log("\n---------------------------------\n");
console.log("Ejercicio e \n");
let espacioIndex = str1.indexOf(" ");
console.log("Posición del primer espacio en blanco:", espacioIndex);

// f.
console.log("\n---------------------------------\n");
console.log("Ejercicio f \n");
let str3 = "tetrahidrocannabinol tetrafluoroetileno";
let primera = str3.substring(0, str3.indexOf(" "));
let segunda = str3.substring(str3.indexOf(" ") + 1);
let resultado = primera.substring(0, 1).toUpperCase() + primera.substring(1).toLowerCase() + " " + segunda.substring(0, 1).toUpperCase() + segunda.substring(1).toLowerCase();
console.log("Resultado:", resultado);