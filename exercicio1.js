/* Corrija o código para que a variável i declarada dentro do comando if seja diferente da variável i declarada na primeira linha da função. Tenha certeza de não usar a palavra-chave var em nenhum lugar do seu código.

Este exercício foi projetado para ilustrar a diferença ente como as palavras-chaves var e let definem o escopo para a variável declarada. Quando programamos uma função semelhante a aquelas utilizadas no exercício, geralmente, é melhor utilizar variáveis distintas para evitar confusão. */

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }