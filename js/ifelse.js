/* If Else
a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    i. “Bebe” si la edad es menor a 2 años;
    ii. “Niño” si la edad es entre 2 y 12 años;
    iii. “Adolescente” entre 13 y 19 años;
    iv. “Joven” entre 20 y 30 años;
    v. “Adulto” entre 31 y 60 años;
    vi. “Adulto mayor” entre 61 y 75 años;
    vii. “Anciano” si es mayor a 75 años.
*/

// a.
console.log("Ejercicio a \n");
const randomValue = Math.random();
if (randomValue >= 0.5) {
    console.log(randomValue, " Greater than 0.5");
}
else {
    console.log(randomValue, " Lower than 0.5");
}

// b.
console.log("\n---------------------------------\n");
console.log("Ejercicio b \n");
const age = Math.floor(Math.random() * 101); 
console.log("Age:", age, "\n");
if (age < 2) {
    console.log("Age:", age, "- Es un bebe");
}
else if (age >= 2 && age <= 12) {
    console.log("Age:", age, "- Es un niño");
}
else if (age >= 13 && age <= 19) {
    console.log("Age:", age, "- Es un adolescente");
}
else if (age >= 20 && age <= 30) {
    console.log("Age:", age, "- Es un joven");
}
else if (age >= 31 && age <= 60) {
    console.log("Age:", age,"- Es un adulto");
}
else if (age >= 61 && age <= 75) {
    console.log("Age:", age, "- Es un adulto mayor");
}
else {
    console.log("Age:", age, "- Es un anciano");
}
