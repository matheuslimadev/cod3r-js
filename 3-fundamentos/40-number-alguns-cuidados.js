// Alguns cuidados:
console.log(7 / 0.000001) // 7000000
console.log(7 / 0) // Infinity (number)
console.log("10" / 2) // 5
console.log("10,2" / 2) // NaN
console.log("10.2" / 2) // 5.1
console.log("Show!" * 2) // NaN
console.log(0.1 + 0.7) // (Gera uma imprecisão) 0.7999999999999999 - Esse resultado acontece porque se fosse para ser 100% preciso (0.8) o tempo para mostrar o resultado seria muito maior.

let numero = 100
console.log(numero.toString()) // Assim funciona, transformar uma variável com valor number acessando o método toString()
//console.log(10.toString()) // Assim irá gerar erro, porque o método .toString() não funciona em um valor number literal
console.log((123).toString()) // 123 está entre parênteses porque o método .log() do objeto console não aceita o número literal executando o método '.toString()', mas se estivesse fora de console.log() poderia usar o número literal 123.toString().
console.log(123.999.toString()) // Estranhamente vai funcionar sem parênteses


// Professor no minuto 4:27 você diz para usar entre parênteses o número para executar o método '.toFixed()', e não usarmos ele de forma literal (sem parênteses).

// Exemplo:

// console.log((123).toFixed()) // Ok, vai funcionar
// console.log(123.toFixed()) // Ok, Não vai funcionar
// console.log(123.999.toFixed()) // Por que raios funciona?
 
// // Obs: O mesmo se aplica para o método .toString()
// Se puder me ajudar com mais esse mistério do JS agradeço!  :)                                                                                                                                                                                                                                                                                                                                                                            
/* DÚVIDAS DA AULA */

// Matheus Alves · Aula 40 · há 3 anos
// Professor Bom Dia,

// Estranho que o exemplo da linha 4, aos 2:44, quando o senhor fala da operação: 

// console.log(0.1 + 0.7) 

// No exemplo acima, realmente é imprimido o valor: 

// 0.7999999999999 

// Mas achei estranho que o js só pegou no pé do 7, porque usando:

// console.log(0.1 + 0.5)
// console.log(0.1 + 0.6)
// console.log(0.1 + 0.8)
// Usando as operações acima irá funcionar, ou seja vai arredonda para o seguintes valores, respectivamente:

// 0.6
// 0.7
// 0.9
// Por que que isso ocorre somente com o bendito 7?


// há 3 anos
// 4 votos a favor
// Bom dia Matheus!

// Gostei do título da pergunta... :)

// Na verdade isso vai correr em outras situações, mas não em todas.

// Por exemplo: 0.1 + 0.19 

// A especificação que trata sobre operações com ponto flutuante que é 100% precisa é diversas vezes mais lenta do que a usada pela maioria das linguagens, por isso acontece os erros de precisão.