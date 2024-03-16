let multiply = (number)=>{
    var tamanhoNumber = (`${number}`.includes('-') ? `${number}`.replace('-','').length : `${number}`.length );
    var potencia = 5 ** parseInt(tamanhoNumber);
    return number * potencia;
  }