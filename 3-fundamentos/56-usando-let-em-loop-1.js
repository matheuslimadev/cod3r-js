/**
 * let em loop - 1
 */
for (let i = 0; i < 10; i++) { // lembrete: "let i" tem escopo de bloco, por isso NÃO é acessível fora do for.
  console.log(`i vale: ${i}`)
}
console.log(i) // ReferenceError: i is not defined