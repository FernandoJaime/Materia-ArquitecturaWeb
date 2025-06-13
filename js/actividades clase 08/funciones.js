/* Funciones
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

// a.
function suma(a, b) {
    return a + b;
}
let resultado = suma(2015, 222);
console.log("Ejercicio a \n");
console.log("Resultado de la suma:", resultado);

// b.
function sumaConValidacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error("Error: Uno de los parámetros no es un número.");
        return NaN;
    }
    return a + b;
}
console.log("\n---------------------------------\n");
console.log("Ejercicio b \n");
resultado = sumaConValidacion(2015, "222");
console.log("Resultado de la suma con validación:", resultado);

// c.
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log("\n---------------------------------\n");
console.log("Ejercicio c \n");
let numero = 3012.3;
console.log("¿Es un número entero?", validateInteger(numero) ? "Sí" : "No");

// d.
function sumaConValidacionEnteros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error("Error: Uno de los parámetros no es un número.");
        return NaN;
    }
    if (!validateInteger(a) || !validateInteger(b)) {
        console.error("Error: Uno de los números no es entero. Se redondeará.");
        a = Math.round(a);
        b = Math.round(b);
    }
    return a + b;
}
console.log("\n---------------------------------\n");
console.log("Ejercicio d \n");
resultado = sumaConValidacionEnteros(2015.7, 222.3);
console.log("Resultado de la suma con validación de enteros:", resultado);

// e.
function validarYRedondearEntero(num) {
    if (!validateInteger(num)) {
        console.error("Error: El número no es entero. Se redondeará.");
        return Math.round(num);
    }
    return num;
}
function sumaConValidacionEnterosSeparada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error("Error: Uno de los parámetros no es un número.");
        return NaN;
    }
    a = validarYRedondearEntero(a);
    b = validarYRedondearEntero(b);
    return a + b;
}
console.log("\n---------------------------------\n");
console.log("Ejercicio e \n");
resultado = sumaConValidacionEnterosSeparada(2015.7, 222.3);
console.log("Resultado de la suma con validación y redondeo de enteros:", resultado);

