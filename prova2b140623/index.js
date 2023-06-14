/*
Resolva os seguintes problemas usando Javascript:


1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.
*/


// 1:
function listPrimes(start, end) {
  var primes = [];
  for (var i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var x = 2; x <= Math.sqrt(n); x++) {
    if (n % x === 0) {
      return false;
    }
  }

  return true;
}

var n = 997;
var nPrime = listPrimes(1, 1000);
console.log(isPrime(n));
console.log(nPrime.join(", "));




// 2:
function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}
var password = 'Az123456';
console.log(validatePassword(password));




// 3:
function factorialNum(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialNum(n - 1);
  }
}
for (var i = 1; i <= 10; i++) {
  console.log(factorialNum(i));
}




// 4:
function isPerfectSquare(n) {
  var sqrt = Math.sqrt(n);
  return Math.floor(sqrt) === sqrt;
}
console.log(isPerfectSquare(25));