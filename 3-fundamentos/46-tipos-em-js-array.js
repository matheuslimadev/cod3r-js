/**
 * Arrays - Vetores - Estrutura Unidirecional
 * É uma forma de agrupar múltiplos valores de uma forma linear
 * (ele não tem múltiplas dimensões por padrão) 
 * Em JS o array é heterogêneo. Ou seja, dentro do mesmo array você pode colocar diversos tipos de dados
 * EM JS o array é flexível. Não tem um tamanho fixo (como em Java ou Go), ele pode crescer e/ou diminuir seu tamanho de acordo com os dados inseridos nas posições dele.
 */

const valores = [7, 7.1, 9.3, 2] // Vírgula é o separador dos elementos
console.log(valores[0]) // 7
console.log(valores[1], valores[2]) // 7.1 9.3

console.log(valores[4]) // undefined
valores[4] = 1.0
console.log(valores[4]) // undefined

console.log(valores[10]) // undefined
valores[10] = 'novo valor'
console.log(valores) // Retornará o array com algumas posições dele vazias

/* Verificar tamanho do array: array.length */
console.log(valores.length) // 11

/* Função que insere dados no final do array: array.push() */
valores.push({id: 3}, false, null, 'vou sair com array.pop()')
console.log(valores)

/* Função que retira a última posição do array: array.pop() - Ele retorna o valor que foi retirado */
console.log(valores.pop())
console.log(valores)

/* Outra Função que também retira valores de um array: detele array[pos] - O retorno da função é um booleano */
console.log(delete valores[0])
console.log(valores)

/** array() em JS é na verdade do tipo 'object' */
console.log(typeof valores) // object