/*Para el formulario 1*/
let formOne = document.getElementById("formOne");
let inputNombre = document.getElementById("inputNombre");
let inputFrecuencia = document.getElementById("inputFrecuencia");

let resultSaludo = document.querySelector("h3#resultSaludo");
let resultDespedida = document.querySelector("h3#resultDespedida");

/*Esta función submit() es para hacer el cálculo y mostrar el resultado en el HTML elemento*/
function submit(event) {
  event.preventDefault();
  let textSaludo = `Hola ${inputNombre.value}! `;
  let saludo = textSaludo.repeat(inputFrecuencia.value);
  resultSaludo.textContent = `${saludo}`;

  let textDespedida = `Adiós ${inputNombre.value}! `;
  let despedida = textDespedida.repeat(inputFrecuencia.value);
  resultDespedida.textContent = `${despedida}`;
}

/*Este evento es para hacer el cálculo (ejecutar la función) cuando clica sobre el botón "submit"*/
formOne.addEventListener("submit", submit);
/*---------------------------------------------------------------*/
/*Para el formulario 2*/
let formTwo = document.getElementById("formTwo");
let inputNumeroOne = document.getElementById("inputNumeroOne");
let inputNumeroTwo = document.getElementById("inputNumeroTwo");

let resultado = document.querySelector("h3#result");
let buttonSuma = document.getElementById("btnSuma");
let buttonResta = document.getElementById("btnResta");

/*Esta función submit() es para realizar la suma*/
function sumar(event) {
  event.preventDefault();
  let suma = Number(inputNumeroOne.value) + Number(inputNumeroTwo.value);
  resultado.textContent = `RESULTADO: ${suma}`;
}
/*Esta función submit() es para realizar la resta*/
function restar(event) {
  event.preventDefault();
  let resta = Number(inputNumeroOne.value) - Number(inputNumeroTwo.value);
  resultado.textContent = `RESULTADO: ${resta}`;
}

/*Este evento es para hacer el cálculo (ejecutar la función correspondiente) cuando clica sobre el botón "Suma" y "Resta"*/
buttonSuma.addEventListener("click", sumar);
buttonResta.addEventListener("click", restar);
