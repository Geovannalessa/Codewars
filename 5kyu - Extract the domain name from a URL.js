function domainName(url){
    if(url.includes('www')){
      var indexPonto = (url.indexOf('.')+1), preCortado = url.slice(indexPonto, url.length);
      var indexPontoDenovo = (preCortado.indexOf('.'));
      return preCortado.slice(0,indexPontoDenovo);
    }else if(url.includes('http')||url.includes('https')){
      var indexBarra = (url.indexOf('/')+2), indexPonto = url.indexOf('.');
      return url.slice(indexBarra,indexPonto);
    }else{
      var indexPonto = (url.indexOf('.'));
      return url.slice(0,indexPonto);
    }
  }