/* Null & Undefined */
/* Entenda a atribuição por valor e a atribuição por referência */

// Por Valor - funciona para tipos primitivos:
let a = 1
let b = a
b++
console.log(a) // 1
console.log(b) // 2

// Por referência - funciona para os tipos: Array e Objetos:
let cao1 = {nome: 'pipoca'}
let cao2 = cao1
cao2.nome = 'paçoca'
console.log(cao1.nome) // paçoca
console.log(cao2.nome) // paçoca

// ---------------------------

let valor // variável definida mas não inicializada, ou seja não foi atribuído valor para ela
console.log(valor) // undefined - Porque eu não atribui nada (nenhum valor) para ela
console.log(valor2) // ReferenceError: valor2 is not defined - É diferente de undefined - Significa que o valor2 nem foi declarado.

/** Null significa que não está sendo apontado para nenhum endereço de memória(atribuição por memória) e ela não tem nenhum valor (como atribuições por valor dos tipos primitivos): */
valor = null // ausência de valor e também ausência de apontamento para um local na memória.
console.log(valor)
console.log(valor.toString()) // TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco) // undefined
console.log(produto.preco.a) // TypeError: Cannot read property 'a' of undefined
