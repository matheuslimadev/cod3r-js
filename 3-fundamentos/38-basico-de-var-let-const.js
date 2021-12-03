// maneira um:
var a = 1

// maneira dois (forma mais moderna):
let b = 2

// Apesar de não fazer o menor sentido, segue um comportamento estranho de JS:
var a = 10 // O JS permite redeclarar usando var
//let b = 20 // O JS não vai deixar você redeclarar uma variável let
b     = 20 // Dessa forma ele vai permitir.

console.log(a, b)

// Constante:
const c = 'valor em string'
// c = 1  // Por ser constante, não é permitido atribuir um novo valor
console.log(c)