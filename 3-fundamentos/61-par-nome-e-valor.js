/**
 * par nome/valor
 */
const saudacao = 'Olá' // contexto léxico 1

function exec () {
  const saudacao = 'Oi' // contexto léxico 2
  return saudacao
}
console.log(`Valor da constante saudacao: ${saudacao}`)
console.log(`Retorno da função exec(): ${exec()}`)

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    rua: 'T1',
    bairro: 'Setor Bueno',
    cidade: 'Goiânia'
  }
}
console.log(cliente)
