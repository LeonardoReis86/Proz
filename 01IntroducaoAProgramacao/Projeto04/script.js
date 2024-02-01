//============== Estrutura if ===============
function calcular(numero1,numero2,operacaoMatematica) {
  if (operacaoMatematica === 1 ) {
    return numero1 + numero2;
  } else if ( operacaoMatematica === 2) {
    return numero1 - numero2;
  } else if (operacaoMatematica === 3) {
    return numero1 * numero2;
  } else if (operacaoMatematica === 4) {
    return numero2 !== 0 ? numero1/numero2 : 0;
  } else {
    return 0;
  }
}

//============== Estrutura switch===============
function calcular(numero1, numero2, operacao) {
  switch (operacao) {
    case 1: 
      return numero1 + numero2;
    case 2: 
      return numero1 - numero2;
    case 3:
      return numero1 * numero2;
    case 4:
      return numero2 !== 0 ? numero1/numero2: 0;
    default:
      return 0;
  }
}

//============== Teste Resposta ===============

console.log(calcular(10, 2, 1));
console.log(calcular(8, 4, 2)); 
console.log(calcular(8, 4, 3));
console.log(calcular(8, 4, 4));
console.log(calcular(8, 4, 5));