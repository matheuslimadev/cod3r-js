const peso1 = 1.0 // no JS, mesmo com . ele entende que é do tipo number e não como float (como em outras linguagens)
const peso2 = Number('2.0') //Transformando String em Number
const peso3 = +'3.0' //Transformando String em Number

// console.log(typeof peso1, peso1)
// console.log(typeof peso2, peso2)
// console.log(typeof peso3, peso3)

// Verificar se um número é integer (inteiro):
// console.log(Number.isInteger(peso1)) // true
const peso4 = 1.1
// console.log(Number.isInteger(peso4)) // false - Por ser 1.1, e não .0 o JS reconhece como não sendo um número inteiro (integer)


const avaliacao1 = 9.909
const avaliacao2 = 3.492
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
// console.log(media)
// Limitando as casas decimais após o ponto:
// console.log(media.toFixed(1)) // numeroFlutuante.toFixed(quantidadeDeCasas)

// Converter um número em String:
const numeroQualquer = 179
console.log(numeroQualquer.toString()) // Transforma numeroQualquer (typeof number) em string. O Método toString() é uma função de valores do tipo number do JS.
console.log(numeroQualquer.toString(2)) // Com o parâmetro 2, o método variavel.toString() retorna o valor(numeroQualquer) em binário
/*
* Lembrando que tanto o método variavel.toFixed() e variavel.toString() não alteram o valor que está na variavel (do tipo number), eles apenas recebem a entrada do valor da variável, computam esse dado e cospem (retornam) um valor.
*/

// Lembrando que:
// Valores do tipo 'number' tem funções para ela, como: number.toString(); number.toFixed()
// E existe a função nativa do JS: 'Number' que possui métodos, exemplo: Number.isInteger(1)
// Assim como a função nativa do JS 'Number', existe a 'Object', que possui métodos como: Object.keys(param) - Nesse param podem ser passados arrays, objetos e até string.

console.log(typeof Number)