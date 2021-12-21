/**
 * Exemplo Básico de função 2:
 */

// Armazenando uma função em uma variável/constante
// Ao invés disso:
// function imprimirSoma () { }
// Armazenando em uma variável/constante, fica assim:
const imprimirSoma = function (a, b) {
  console.log(a + b)
}
imprimirSoma(2, 3) // 5


// Armazenando uma função Arrow em uma variável:
// A priori, saiba que Arrow Function é uma maneira mais simples de escrever uma função
const imprimirSub = (a, b) => {
  console.log(a - b)
}
imprimirSub(10, 2) // 8


// Arrow Function com retorno implícito - Função mais reduzida ainda:
// Quando não há {} significa que será executada apenas uma sentença (linha) de código depois de '=>'. Será também retornado o resultado dessa sentença de código. Se não tiver retorno, a função retorna undefined.
const multiplicacao = (a, b) =>  a * b
console.log(multiplicacao(10, 2)) // 20

//Arrow function mais reduzida ainda
const divisao = a => a / 2 //Quando é enviado apenas um parâmetro não é necessário colocar entre ()
console.log(divisao(10))