// Tipagem dinâmica: O tipo de uma variável é dinâmico, ou seja, uma hora pode ser um valor do tipo number, outro momento string, outro objeto...

let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

// Mudando o tipo da variável:
qualquer = 3.14
console.log(qualquer)
console.log(typeof qualquer)
// Isso só é permitido porque JS é uma linguagem com tipagem fraca.

//Evitar nomes genéricos:
let valor = ''
let numero = 1
let pqp = false  // pqp = Produto Químico Perigoso... kkkk
// Evite também comentários redundantes e idiotas.
// Prefira código claro do que comentário.