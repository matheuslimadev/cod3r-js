/**
 * Exemplo Básico de função:
 */

// Função sem retorno:
function imprimirSoma (a, b) {
  console.log(a + b)  
}
imprimirSoma(2, 8) // 10
imprimirSoma(2) // NaN - Vai somar o parâmetro 1 (2) + o parâmetro 2. Como não passei paramêtro 2, ele interpreta como undefined
imprimirSoma(1, 1, 2, 3, 4, 5) // 2 - Os outros argumentos serão ignorados
imprimirSoma() // NaN - Somou Undefined + Undefined


// Função com retorno:
function soma (a, b = 0) { // <-  "b = 0" - É uma possibilidade do ES6, que é você ter uma valor padrão quando não for passado. 
  return a + b
}
console.log(soma(50 + 50))  // 100
console.log(soma(50))       // 50
console.log(soma())         // NaN - Somou undefined + 0
