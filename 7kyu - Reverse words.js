function reverseWords(frase) {
    var fraseArray = frase.split(' '), novaFrase = [];
    for(let i = 0; i < fraseArray.length; i++){
      var palavra = fraseArray[i], novaPalavra = '';
      for(let j = palavra.length-1; j >= 0; j--) novaPalavra += palavra[j];
      novaFrase.push(novaPalavra);
    }
    return novaFrase.toString().replace(/,/g,' ');
  }