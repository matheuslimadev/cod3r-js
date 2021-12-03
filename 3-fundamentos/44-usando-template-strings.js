const umNome = 'Rebeca'

const concatenacao = 'Olá ' + umNome + '!'
const template = `
  Olá 
  ${concatenacao}!!!
`

// console.log(concatenacao)
// console.log(template)

// Expressões:
// console.log(`5 x 5 = ${5 * 5}`)

// Usando funções na template string:
const up = s => s.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
