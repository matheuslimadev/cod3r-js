/**
 * var em loop - 2
 */
const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]() // 10 - Isso é um erro histórico do JS, o resultado deveria ser 2
funcs[8]() // 10 - Isso é um erro histórico do JS, o resultado deveria ser 8