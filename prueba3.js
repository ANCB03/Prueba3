//Problema 1
const prompt = require("prompt-sync")({ sigint: true });
function problema1() {
  const arr = [];
  let num = 0;
  for(let i = 0;i < 5;i++){
    num = parseInt(prompt("Ingrese el número que quieres ingresar al arreglo: "));
    if(parseInt(num)){
    arr.push(num);
  }else{console.log("No es un número")}
  }
  console.log(arr);
}
console.log("Problema 1:")
//problema1();
//Problema 2
function problema2() {
  let num = 1;
  let arr1 = Array.from({ length: 10 }, () => num++);
  console.log(arr1);
  let mediaN =
    arr1.reduce(function (acumulador, siguienteValor) {
      return acumulador + siguienteValor;
    }, 0) / arr1.length;
  console.log("Media: " + mediaN + "\n");
}
console.log("Problema 2:")
problema2();

//Problema 3

  let arreglo = [10, 10, 3, 20, 5];
  function obtenerNumero() {
    var obtenerN = document.getElementById("numero").value;
    return obtenerN;
  }
  const pos = new Array();
  function problema3() {
    let buscar = obtenerNumero();
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] == buscar) {
        pos.push(i);
      }
    }
    //console.log(pos);
    imprimir();
  }

  function imprimir() {
    var lista = "";
    for (var i = 0; i < pos.length; i++) {
      lista +=
        " posicion del elemento " +
        obtenerNumero() +
        " en el array: " +
        pos[i] +
        "\n";
    }
    document.getElementById("listado").innerText = lista;
  }
  const arrFiltrado = arreglo.filter((num, index) => num % 2 == 0);


//Problema 4
const arr2 = [0, 10, 20, 11, 15, 16, 12, 9, 5, 18, 3];

function promedio(arr){
  let promedio =
  arr.reduce(function (acumulador, siguienteValor) {
    return acumulador + siguienteValor;
  }, 0) / arr.length;
  return promedio;
}

const aprobados = new Array();
const desaprobados = new Array();
arr2.map((x) => (x >= 12 ? aprobados.push(x) : desaprobados.push(x)));
let promedioApro = promedio(aprobados);
let promedioDesa = promedio(desaprobados);
  console.log("Problema 4:")
console.log("Notas: " + arr2);
console.log(
  "Cantidad aprobados: " +
    aprobados.length +
    "\n" +
    "Cantidad desaprobados: " +
    desaprobados.length
);
console.log(
  "Promedio aprobados: " +
    promedioApro +
    "\n" +
    "Promedio desaprobados" +
    promedioDesa +
    "\n"
);
//Problema 5
const arr3 = [1, 34, 67, 8, 3, 4, 0, 67, 432, 6, 34, 21, 34, 8999, 21, 8, 9];
let mayor = Math.max(...arr3);
let menor = Math.min(...arr3);
let media = promedio(arr3);
  console.log("Problema 5");
console.log(
  "El arreglo es: " +
    arr3 +
    "\n" +
    "El número mayor es: " +
    mayor +
    "\n" +
    "El menor es: " +
    menor +
    "\n" +
    "La media es: " +
    media +
    "\n"
);

//Problema 6
let cadena = "1234567";
let arr4 = cadena.split("").toString();
let arr6 = [];
arr6 = arr4.split(",");
console.log("Problema 6:")
console.log("Cadena: " + cadena);
console.log("Arreglo: ");
console.log(arr4);
console.log(arr6);

//Problema 7
let arr5 = [1, 2, 3, 4, 5, 6];
function problema7(arr5) {
  let arr = new Array();
  arr5.map((x) => arr.push(x * 2));
  return arr;
}
console.log(
  "\n" + "Problema 7:" + "\n" +
    "Arreglo recibido: " +
    arr5 +
    "\n" +
    "Arreglo retornado: " +
    problema7(arr5)
);

//Problema 8
const miarray = Array.from({ length: 3 }, () =>
  Math.floor(Math.random() * (1000 - 0 + 1))
);
//console.log(miarray);

function problema8(arr) {
  console.log("Problema 8:")
  console.log(arr);
  console.log(arr[(arr.length - 1) / 2]);
}

problema8(miarray);

//Problema 9

function Alumno(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
function problema9() {
  const array = new Array();
  let name;
  let age;
  /*while (true) {
    name = prompt("Ingrese el nombre del alumno: ");
    if (name == "*") break;
    age = prompt("Ingrese la edad del alumno: ");
    array.push(new Alumno(name, age));
  } */
  do {
    name = prompt("Ingrese el nombre del alumno: ");
    if (name != "*") {
    age = prompt("Ingrese la edad del alumno: ");
    array.push(new Alumno(name, age));
  }
  } while (name != "*");
  const Adultos = new Array();
  array.map((x) => (x.edad >= 18 ? Adultos.push(x) : false));
  console.log("Mayores de edad: ");
  Adultos.map((x) => console.log("nombre: " + x.nombre + " edad: " + x.edad));
  console.log("Alumnos con mayor edad: ");
  let max = 0;
  const mayores = new Array();
  Adultos.map((x) => (x.edad >= max ? (max = x.edad) : false));
  let count = 0;
  Adultos.map((x) => (x.edad == max ? mayores.push(x) : false));
  mayores.map((x) =>
    console.log("Nombre: " + x.nombre + " " + "Edad: " + x.edad)
  );
}
problema9(); //Probar Problema 9 por consola con node
//Problema 10
function Problema10() {
  console.log("Problema 10:")
  const M = 5,N = 5;
  const matriz = new Array(M);
  for (var i = 0; i < M; i++) {
    matriz[i] = new Array(N);
  }
  let sumTotalFilas = 0;
  function sumarFilasEImprimir(matriz) {
    let cadFila = " ";
    let num = 10;
    let sumFila = 0;
    for (var i = 0; i < matriz.length; i++) {
      sumFila = 0;
      for (var j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = num;
        cadFila+= `${matriz[i][j]} `;
       
        sumFila += num;
        num++;
      }
      if (i != matriz.length) {
        cadFila += `= ${sumFila} \n `;
      } else {
        cadFila += `= ${sumFila}`;
      }
      //console.log("suma fila " + (i+1) + ": " + sumFila);
      sumTotalFilas += sumFila;
    }
    console.log(cadFila);
  }
  let sumaTotalCol = 0;
  function sumarColumnasEImprimir(matriz){
      //console.log("______________ \n");
      let cad = " ";
      let sumaCol = 0;
      for(let i = 0;i < matriz[0].length;i++){
        sumaCol = 0;
        for(let j = 0; j < matriz.length;j++){
            sumaCol += matriz[j][i];
        }
        cad += `${sumaCol} `;
        sumaTotalCol+=sumaCol;
      }
      console.log(cad);
  }
  sumarFilasEImprimir(matriz);
  sumarColumnasEImprimir(matriz);
  
  
  console.log("Suma total filas: " + sumTotalFilas);
  console.log("Suma total columnas: " + sumaTotalCol)
  //imprimir(matriz);
}
Problema10();
//Problema 11
function Problema11(){
  let tam = 0;
  tam = parseInt(prompt("Ingrese el tamaño del arreglo: "));
  let numero = 0;
  numero = parseInt(prompt("Ingrese el valor de la función: "));
  const number = numero;
  let arr = Array.from({ length: tam }, (x) => (numero+=number)-number); 
  //console.log(arr);
  mostrarElementosProblem11(arr);
}
function mostrarElementosProblem11(arr){
  let cad = "";
  arr.map((x) => cad+=`${x} `);
  
  console.log("elementos del arreglo: " + cad)
}
Problema11();