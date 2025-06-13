/* Variables y operadores 
a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizarlength).
*/

const readline = require('readline-sync'); 

// a.
console.log("Ejercicio a \n");

let num1 = readline.questionInt("Ingrese un numero 1: ");
let num2 = readline.questionInt("Ingrese un numero 2: ");
let suma = num1 + num2;

console.log("Resultado de", num1, "+", num2, "es =", suma);

// b.
console.log("\n---------------------------------\n");
console.log("Ejercicio b \n");

var str1 = readline.question("Ingrese una cadena de texto 1: ");
var str2 = readline.question("Ingrese una cadena de texto 2: ");
let concatenacion = str1 + " " + str2;

console.log("Resultado de la concatenación es:", concatenacion);

// c.
console.log("\n---------------------------------\n");
console.log("Ejercicio c \n");

str1 = readline.question("Ingrese una cadena de texto 1: ");
str2 = readline.question("Ingrese una cadena de texto 2: ");
let sumaLargo = str1.length + str2.length;

console.log("La suma de los largos de las cadenas es:", sumaLargo);