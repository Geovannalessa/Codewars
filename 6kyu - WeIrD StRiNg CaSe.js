const toWeirdCaseTeste = (str) => {
    /*
      Algoritmo
      objetivo: pares indexados em cada palavra em letras maiúsculas e todos os caracteres indexados ímpares em cada palavra em letras minúsculas
      Receber a string e tranforma-las em array dividos por espaço.
      criar um array vazio chamado novoArrayPalavra;
      Fazer um loop que passe pelo array:
      - para cada nova palavra no array guardar o tamanho 
      - criar uma variavel novaPalavra vazia;
      - fazer um loop com o tamanho da palavra.
      - guardar as palavras que são pares que no i seja % 2 seja 0 e deixa-las maisculas e os que são diferente deixar impar
      - para cada palavra em i adicionar += na variavel
      fora do loop pegar a novaPalavra e adicionar no novoArrayPalavra
  
      com o novoArrayPalavra transformar em uma string trocando todas virgulas por espaço
    */
    var strArray = str.split(' ');
    var novoArrayPalavra = [];
    for (let i = 0; i < strArray.length; i++) {
        //cada palavra
        var palavra = strArray[i];
        var tamanho = palavra.length;
        var novaPalavra = '';
        console.log('tamanho da palavra "' + palavra + '" = ' + tamanho)
        for (let j = 0; j < tamanho; j++) {
            //cada letra
            var letra = palavra[j];
            //se a posição da letra for par guardar a letra da rodada
            if (j % 2 == 0) {
                var maisculas = letra.toUpperCase();
                letra = maisculas;
            }
            novaPalavra += letra;
        }
        novoArrayPalavra.push(novaPalavra)
    }
    var retorno = novoArrayPalavra.toString().replace(/,/g, ' ')
    console.log(retorno)
}
//toWeirdCaseTeste('Weird string case')

let toWeirdCase = (str) => {
    var strArray = str.split(' '), novoArrayPalavra = [];
    for (let i = 0; i < strArray.length; i++) {
        var palavra = strArray[i], tamanho = palavra.length, novaPalavra = '';
        for (let j = 0; j < tamanho; j++) {
            var letra = palavra[j];
            (j % 2 == 0) ? letra = letra.toUpperCase() : letra = letra.toLowerCase();
            novaPalavra += letra;
        }
        novoArrayPalavra.push(novaPalavra)
    }
    return (novoArrayPalavra.toString().replace(/,/g, ' '))
}
