const numeros = [1, 2, 3, 4, 5];

// Función de retorno de llamada para duplicar un número
function duplicarNumero(numero) {
  return numero * 2;
}

// Función de retorno de llamada para triplicar un número
function triplicarNumero(numero) {
  return numero * 3;
}

// Una función genérica para aplicar una función de retorno de llamada a cada elemento del arreglo y
// crear un nuevo arreglo con los resultados
function aplicarFuncionARreglo(arr, funcionDeRetorno) {
  const resultado = [];
  arr.forEach(function(elemento) {
    resultado.push(funcionDeRetorno(elemento));
  });
  return resultado;
}

// Utilizamos la función para duplicar los números
const numerosDuplicados = aplicarFuncionARreglo(numeros, duplicarNumero);
console.log(numerosDuplicados); // [2, 4, 6, 8, 10]

// Utilizamos la función para triplicar los números
const numerosTriplicados = aplicarFuncionARreglo(numeros, triplicarNumero);
console.log(numerosTriplicados); // [3, 6, 9, 12, 15]
