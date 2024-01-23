//---Algoritmo
// Receber o número e armazernar em uma variavel
// saber quantas casas decimais tem atraves da variavel
// fazer um loop:
   // - que passe por cada numero da variavel e faça uma potencia com o numero de casas decimais
   // - e atraves do resultado da potencia converta em numeros
   // - e faça a soma atraves de um loop, para passar por cada posição e somar com o valor que já tem presente na variavel
   // - armazene em uma variavel chamada resultado
// se o resultado da potencia for igual com o numero da variavel recebida retorne 'true' se não 'false'

function narcissistic(n) {
    var numero = `${n}`,
        casasDecimais = numero.length,
        valorPotencia = [],
        soma = 0;
    for(var i = 0; i < casasDecimais; i++){
      var potenciaResultado = numero[i] ** casasDecimais;
      valorPotencia.push(potenciaResultado);
      soma = soma + potenciaResultado;
    }
    var resultado = soma == numero ? true : false;
    return resultado;
  }