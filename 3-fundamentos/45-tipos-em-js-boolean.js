// Coisas em JS que geram resultados verdadeiro ou falso:

var isAtivo = false 
console.log(isAtivo) // falso (boolean)

isAtivo = true
console.log(isAtivo) // true (boolean)

// Convertendo algo que não é true (boolean) ou false (boolean) em true (boolean) ou false (boolean) usando o ! ou !!
isAtivo = 1
console.log(!isAtivo) // resultado: false (boolean) ! é uma negação lógica, retornando o contrário (lógico) do valor em que ela foi aplicada.
console.log(!!isAtivo) // resultado: true (boolean) !! converte (lógicamente) o valor para o tipo booleano.

// Os verdadeiros
console.log('Os verdadeiros: ')
console.log(!!3) // true - número positivo
console.log(!!-1) // true - número negativo
console.log(!!' ') // true - string apenas com um espaço
console.log(!![]) // true - array vazio
console.log(!!{}) // true - objeto literal
console.log(!!Infinity) // true - typeof Infinity = number - é um tipo de valor
console.log(!!(isAtivo = true)) // true - O resultado de isAtivo = true. Não retornou true porque a atribuição foi feita, mas sim porque o valor true foi atribuído a 'isAtivo', fazendo com que o !! convertesse o isAtivo (recebido o valor true) em um valor lógico.
console.log(!!(isAtivo = 'String qualquer')) // true
