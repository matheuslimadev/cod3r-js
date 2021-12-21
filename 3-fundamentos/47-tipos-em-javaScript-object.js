/** Objetos - É uma coleção de pares(chaves e valores), sempre. */

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4098.99
prod1['desconto novo'] = 50 // Usando espaço para definir uma chave do objeto. Evite usar assim, mas é possível
console.log(prod1)

/* Criando a chave e valor direto na declaração do objeto: */
const prod2 = {
  nome: 'Playstation 5',
  preco: 5000,
  obj: {
    prop1: 1,
    prop2: {
      teste1: 'valor'
    }
  }
}

// '{"produto": "bicicleta", "preco": 200.00}' - Estrutura JSON - O que é diferente de um objeto em JS.

console.log(prod2)