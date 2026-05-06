// 1
const a = 20;
const b = 6;
console.log(`Suma = ${a + b}`);
console.log(`Resta = ${a - b}`);
console.log(`Producto = ${a % b}`);
console.log(`División = ${a / b}`);

// 2
const base = 8;
const altura = 9;
const area = base * altura;
const perimetro = 2 * (base + altura);
console.log(`Área = ${area}`);
console.log(`Perímetro = ${perimetro}`);

// 3
const nota1 = 7;
const nota2 = 9;
const nota3 = 6
const media = nota1 + nota2 + nota3 / 3;
console.log(media);

// 4
const celsius = 100;
const fahrenheit = celsius * (9/5) +32;
console.log(`${celsius}ºC = ${fahrenheit}ºF`)

// 5
const totalCentimos = 347
const euros = Math.floor(totalCentimos / 100);
const centimos = totalCentimos % 100;
console.log(`${euros} euros y ${centimos}`);

// 6
const precioBase = 49.99;
const iva = precioBase * 0.21;
const precioFinal = precioBase + iva;
console.log(`${precioFinal.toFixed(2)}€`);

// 7
const totalMinutos = 137;
const horas = Math.floor(totalMinutos / 60);
const minutos = totalMinutos % 60;
console.log(`${minutos} y ${minutos}`);

// 8
const n = 4;
console.log(Math.pow(n, 2));
console.log(n ** 2);
console.log(n ** 3);

// 9
let a = "rojo";
let b = "azul";
const temp = a;
a = b;
b = temp;
console.log(a, b);

// 10
const distanciaKm = 250;
const tiempoHoras = 2.5;
const KmHora = 250 / 2.5;
console.log(`Tarda ${KmHora} Km/h`)