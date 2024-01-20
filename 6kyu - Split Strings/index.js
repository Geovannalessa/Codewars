function solution(str){
    var quantidade = str.length;
    var novaStr = str;
    if(quantidade %  2 != 0)novaStr = `${str}_`; 
    var resultado = [];
    for(var i = 0; i < quantidade; i = i+2 ){
      resultado.push(novaStr[i]+novaStr[i+1])
    }
    return resultado;
  }