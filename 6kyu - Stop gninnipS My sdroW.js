function spinWords(str){
    var strArray = str.split(' '), novoArray = [], tamanho = strArray.length;
    for(let i = 0; i < tamanho; i++){
      var palavra = strArray[i];
      var palavraNova = '';
      var tamanhoPalavra = palavra.length;
      for(let j = 0; j < tamanhoPalavra; j++) if(tamanhoPalavra <= 4) palavraNova += palavra[j];
      if(tamanhoPalavra >= 5){
        for( let i = tamanhoPalavra -1; i >= 0; i--){
          palavraNova += palavra[i];
        }
      }
      novoArray.push(palavraNova);
    }
    return novoArray.toString().replace(/,/g, ' ');
  }