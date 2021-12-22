/**
 * Hoisting - Elevação; Içamento; Levantar
 */

console.log(`'a' antes de declarado vale: ${a}`) // Executar só essa linha vai dar erro, mas executar essa linha e a linha abaixo o resultado será 'undefined', porque há o hoisting.
var a = 'Alfabeto'
console.log(`'a' depois de declarado e atribuído valor: ${a}`)

/**
 * Mesmo exemplo, porém dentro de uma função: (O resultado vai ser o mesmo)
 */
function teste () {
  console.log(numero) // undefined
  var numero = 10
  console.log(numero) // 10
}
teste()