/* Arrays
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
e. Invertir el orden del array (utilizar reverse).
f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
*/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a.
console.log("Ejercicio a \n");

console.log("Mes 5:", meses[4]); 
console.log("Mes 11:", meses[10]); 

// b.
console.log("\n---------------------------------\n");
console.log("Ejercicio b \n");
meses.sort();
console.log("Meses ordenados alfabéticamente:", meses);

// c.
console.log("\n---------------------------------\n");
console.log("Ejercicio c \n");

meses.unshift("Inicio del año"); 
meses.push("Fin del año");
console.log("Meses después de agregar al principio y al final:", meses);

// d.
console.log("\n---------------------------------\n");
console.log("Ejercicio d \n");

meses.shift(); 
meses.pop(); 
console.log("Meses después de quitar del principio y del final:", meses);

// e.
console.log("\n---------------------------------\n");
console.log("Ejercicio e \n");

meses.reverse(); 
console.log("Meses invertidos:", meses);

// f.
console.log("\n---------------------------------\n");
console.log("Ejercicio f \n");

const mesesUnidos = meses.join(" - ");
console.log("Meses unidos en un string:", mesesUnidos);

// g.
console.log("\n---------------------------------\n");
console.log("Ejercicio g \n");
const meses_nuevo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mesesCopia = meses_nuevo.slice(4, 11); 
console.log("Copia de meses desde Mayo hasta Noviembre:", mesesCopia);
