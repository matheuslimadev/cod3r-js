/**
 * var
 */
{
  {
    {
      {
        var sera = 'será?'
      }
    }
  }
}
console.log(sera) // 'sera' - por ser uma variável declarada como 'var' ignora o escopo de bloco

const mostrar = () => {
  var uau = 'uau!'
}
mostrar()
// console.log(uau) // Vai gerar erro, porque a variável uau foi declarada como var dentro de uma função. Portanto ela só é visível dentro da função em que ela foi criada.
