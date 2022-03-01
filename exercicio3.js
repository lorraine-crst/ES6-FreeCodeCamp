//Nesse desafio, você usará o método Object.freeze para prevenir a mudança de constantes matemáticas. Você precisa congelar o objeto MATH_CONSTANTS para que ninguém possa alterar o valor de PI, adicionar ou deletar propriedades.

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Altere apenas o código abaixo desta linha
    Object.freeze(MATH_CONSTANTS);
  
    // Altere apenas o código acima desta linha
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();