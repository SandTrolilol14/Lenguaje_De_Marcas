// 29
const edad = 16;
if (edad > 18) {
    console.log(`Mayor de edad`)
} else {
    console.log(`Menor de edad`)
}

// 30
const numero = 7;
const resto = 7 % 2;
if (resto === 0) {
    console.log(`Es par`)
} else {
    console.log(`Es impar`)
}

// 31
const n = -3
if (n === 0) {
    console.log(`Es 0`)
} else if (n > 0) {
    console.log(`Es positivo`)
} else {
    console.log(`Es negativo`)
}

// 32
const nota = 4.8;
if (nota >= 5) {
    console.log(`Aprobado`)
} else {
    console.log(`Suspenso`)
}

// 33
const a = 15;
const b = 28;
if (a > b) {
    console.log(`a es mayor`)
} else if (b > a) {
    console.log(`b es mayor`)
} else {
    console.log(`Son iguales`)
}

// 34
const temp = 15
if (temp < 0) {
    console.log(`Helada`)
} else if (temp > 0 && temp <= 10) {
    console.log(`Fría`)
} else if (temp > 10 && temp <= 20) {
    console.log(`Fresca`)
} else if (temp > 20 && temp <= 30) {
    console.log(`Agradable`)
} else {
    console.log(`Calurosa`)
}

// 35
const nota = 73
if (nota < 60) {
    console.log(`F`)
} else if (nota > 60 && nota <= 69) {
    console.log(`D`)
} else if (nota > 69 && nota <= 79) {
    console.log(`C`)
} else if (nota > 79 && nota <= 89) {
    console.log(`B`)
} else if (nota > 89 && nota <= 100){
    console.log(`A`)
} else {
    console.log(`Nota no válida`)
}

// 36
const x = 8;
const y = 15;
const z = 12;
if (x > y && x > z) {
    console.log(`${x} es el mayor`)
} else if (y > x && y > z) {
    console.log(`${y} es el mayor`)
} else if (z > x && z > y) {
    console.log(`${z} es el mayor`)
} else {
    console.log(`No hay ningun mayor`)
}

// 37
const usuario = admin;
const password = js2024
if (usuario === `admin` && password === `js2024`) {
    console.log(`Acceso aceptado`)
} else {
    console.log(`Acceso denegado`)
}

// 38
const normal = 9;
const descuentoEdad = 5;
const precioMiercoles = 4;
const edad2 = 30;
const diaSemana = miercoles
if (diaSemana === `miercoles`) {
    console.log(`Paga ${precioMiercoles}€`)
} else if (edad2 > 14 || edad2 < 65) {
    console.log(`Paga ${descuentoEdad}€`)
} else {
    console.log(`paga ${normal}€`)
}

// 39
const a2 = 10;
const b2 = 3;
const operacion = modulo;
let resultado;
if (operacion === "suma") {
    resultado = a + b;
} else if (operacion === "resta") {
    resultado = a - b;
} else if (operacion === "multiplicacion") {
    resultado = a * b;
} else if (operacion === "division") {
    resultado = a / b;
} else if (operacion === "modulo") {
    resultado = a % b;
} else {
    resultado = "Operación no reconocida";
}

console.log(`Resultado: ${resultado}`);

// 40
const peso = 70;
const altura = 1.75;
calculo = peso * (altura * altura);
if (calculo < 18.5) {
    console.log(`${calculo} = Bajo peso`)
} else if (calculo >= 25) {
    console.log(`${calculo} = Normal`)
} else if (calculo >= 30) {
    console.log(`${calculo} = Sobrepeso`)
} else if (calculo >= 30) {
    console.log(`${calculo} = Obesidad`)
} else {
    console.log(`No válido`)
}

// 41
const stock = 5;
const mensaje = stock > 0 ? "Disponible" : "Agotado";

console.log(mensaje);

// 42
const n = 15;

if (n % 3 === 0 && n % 5 === 0) {
    console.log("Divisible por 3 y 5");
} else if (n % 3 === 0) {
    console.log("Solo por 3");
} else if (n % 5 === 0) {
    console.log("Solo por 5");
} else {
    console.log("Ninguno");
}