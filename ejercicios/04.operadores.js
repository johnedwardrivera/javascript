// OPERADORES DE COMPARACION

// < mayor que
// > menor que
// >= mayor o igual  que
// <= menor o igual que
// == igual que (igual valor)
// === estrictamente igual que (igual el valor o tipo de datos)
// != diferente que (distinto valor)
// !== estrictamente diferente que (distinto valor o tipo de datos)

let edadMaria = 37;
let edadJose = 34;
let edadAntomio = 14;
let edadCarmen = 15;
let edadLuis = 36;

if (edadMaria === edadJose) {
  console.log("tenemos la misma edad");
} else {
  console.log(" no tenemos la misma edad");
}
//OPERADORES ARIMETICOS
console.log(3 + 5); // suma
console.log(56 - 34); // resta
console.log(3 * 56); // multiplicacion
console.log(5 / 2); // division
console.log(10 % 2); // modulo o resto

//OPERADORES LOGICOS
// ! operador de nagacion
// && operador and
// || operador or

let nombre = "maria ";
if (!nombre) {
  console.log("esta chica tiene nombre");
}

let nombreMujer = "carla";
let edadMujer = "27";
let estadoMujer = "soltera";
let isMujer = true;
if (nombreMujer == "carla" && edadMujer == "28") {
  console.log(" se cumple la condicion ");
} else {
  console.log("no se cumple la condicion");
}
