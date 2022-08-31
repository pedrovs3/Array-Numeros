'use strict';

import { showArray } from './modules/showArray.js';
import { randomNum } from './modules/randomNum.js';

let numbers = new Array(); //[10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i <= randomNum(1, 12); i++) {
  numbers.push(randomNum(0, 50));
}

// const desconto = numbers.map((numero) => {
//   return numero - 2;
// });
const desconto2 = (numero) => numero - 2;
const numbersDescont = numbers.map(desconto2);

//const menor20 = (numero) => valor < 20
//const valorMenor20 = numbers.filter(menor20)

const adicionaValores = (soma, array = []) => array.map(elemento => elemento + soma);

const acimaVinte = numbers.filter((numero) => {
  if (numero > 20) return numero;
});

const somaValores = numbers.reduce((acc, numero) => {
  return acc + numero;
}, 0);

//Exec 2
const pares = numbers.filter((numero) => {
  return numero % 2 == 0;
});

//Exec 3
const totalMenos4 = numbers.reduce((ac, numero) => {
  ac += numero;
  return ac - 4;
});

//exec 4
const impares = numbers.filter((numero) => {
  if (numero % 2 != 0) return numero;
});

showArray(numbers, 'main', 'Numeros');
showArray(numbersDescont, 'main', 'Numeros - 2');
showArray(acimaVinte, 'main', 'Numeros acima de 20');
showArray([somaValores], 'main', 'Soma dos valores');
showArray(adicionaValores(100, numbers), 'main', 'Valores + 100');
showArray(pares, 'main', 'Pares');
showArray(impares, 'main', 'Impares');
showArray(adicionaValores(21, impares), 'main', 'Impares + 21');
showArray(valoresMenos4, 'main', 'valores - 4');
showArray([somaValores - 4], 'main', 'Total - 4')
showArray([totalMenos4], 'main', 'Valor - 4 = Total ');
