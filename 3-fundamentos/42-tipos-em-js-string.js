// String são uma cadeia de caracteres delimitadas por '', "" ou ``
// As funções de string podem ser chamadas usando literais, ou seja, não preciso colocar entre () ou dentro de uma variável para usar, assim como são as funções dos valores do tipo number
// Exemplo com string: 'nome'.charAt(0) //retorno: 'c' (string)
// Exemplo com número: (1).toString() // retorno: '1' (string)

const escola = 'cod3r'

console.log(escola.charAt(4)) // string.charAt(4) <- a função charAt, nesse caso recupera o caracter na posição que foi setado via argumento (4)
console.log(escola.charAt(10)) // Vai retornar uma String vazia. Porque na string não existe o índice 10.
console.log(escola.charCodeAt(3)) // Vai retornar o código (unicode - da tabela asc) referente ao que foi passdo no parâmetro. Pode pasar o parâmetro literal (sem aspas) ou com aspas ''. - Ref: https://unicode-table.com/pt/#basic-latin

console.log(escola.indexOf(3)) // Vai econcontrar o indice 3(number) referente a palavra c(0) o(1) d(2) 3(3) r(4). Quando for números literais passado no argumento ele consegue achar esse número na string. Mas se você quer achar letras, deve passar no argumento da função uma string.
console.log(escola.indexOf('c')) // Vai retornar 0.

console.log(escola.substring(1)) // Retorna 'od3r'. Retorna a string a partir do índice que você setou no argumento (nesse caso 1), incluindo a string correspondente a este índice (nesse caso: 'o')
console.log(escola.substring(0, 2)) // Retorna 'co'. Argumento 1, a posição inicial da string que vocêr quer (incluindo ela), argumento 2 até qual posição da string você quer, NÃO incluíndo a string correspondente ao indice que você setou. Nesse caso retornou 'co', porque 'c' (índice: 0), 'o' (índice: 1) e passei 2, a não inluí 'd' (índice: 2).

// CONCATENAR COM FUNÇÃO NATIVA DO JS:
console.log('Escola: '.concat(escola).concat('!'))
console.log('Escola: ' + escola + '!!!') // mesma coisa do exemplo anterior

// SUBSTITUIÇÃO:
console.log(escola.replace(3, 'e')) // Mais uma vez, passando um número literal no primeiro argumento, ele vai aceitar e vai procurar dentro da string o número setado, com letra não é possível passar literal, é necessário passar entre aspas - simples ou duplas.
console.log(escola.replace('c', 'C'))
console.log(escola.replace(/\d/, '7')) // Regex, substituindo o primeiro dígito (número), que ele encontrar, da string pelo número 7
console.log(escola.replace(/\w/g, 'z')) // Regex, substituindo todas os caracteres da string setada pelo caracter 'z'


// CONVERTER STRING P/ ARRAY:
console.log('ANA, MARIA, JOANA'.split(', '))
console.log('FABIO,MACELO,RONALDO'.split(/,/)) // fazendo a mesma coisa, só que com REGEX.




