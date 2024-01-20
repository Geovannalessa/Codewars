const getCount = str => {
    var vogais = ['a','e','i','o','u'];
    var contador = 0;
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j < vogais.length; j++){
        str[i] == vogais[j] ? contador++ : null
      }
    }
    return contador;
  }