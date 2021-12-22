/**
 * var em loop - 1
 */
for (var i = 0; i < 10; i++) { // lembrete: "var i" não tem escopo de bloco, por isso é acessível fora do for.
  console.log(`i vale: ${i}`)
}
console.log(i)