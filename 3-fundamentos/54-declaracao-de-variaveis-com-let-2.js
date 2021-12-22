/**
 * Let 1
 */
var numero = 1
{
  let numero2 = 2
  console.log(`dentro mostrando o de fora: ${numero}`) // 1 - Mesmo estando dentro do bloco ele vai buscar fora do bloco (escopo maior) caso não ache no dele (escopo menor). A preferência é do escopo menor.
  console.log(`dentro: ${numero2}`) // 2 
}
console.log(`fora: ${numero}`)

/**
 * O mesmo ocorre com const:
 */
const t0 = 't0'
{
  const t0 = 't01'
  console.log(t0) // t01
}
console.log(t0) // t0