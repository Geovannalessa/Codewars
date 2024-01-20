let well = function(x){
    let countGood = 0;
    for(let i = 0; i < x.length; i++){
      if(x[i] === 'good') countGood++
     }
      
    if(countGood == 0 ){
      return 'Fail!'
    } 
    else if(countGood <= 2 ) {
      return 'Publish!'
    }
    else{
      return'I smell a series!'
    }    
  }