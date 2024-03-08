function sameCase(a,b){
    let regexMaiuscula = /[A-Z]/;
   let regexMinuscula = /[a-z]/;
   let aMaiuscula = regexMaiuscula.test(a);
   let bMaiuscula = regexMaiuscula.test(b);
   let aMinusculo = regexMinuscula.test(a);
   let bMinusculo = regexMinuscula.test(b);
 
   if((aMaiuscula == true && bMaiuscula == true) || (aMinusculo == true && bMinusculo == true)){
     return  1;
   }
   else if((aMaiuscula == true || aMinusculo == true ) && (bMaiuscula == false && bMinusculo == false) ){
      return -1;
   } else if((aMaiuscula == false && aMinusculo == false ) && (bMaiuscula == true || bMinusculo == true) ){
     return -1;
   }else if((aMaiuscula == false && aMinusculo == false ) && (bMaiuscula == false && bMinusculo == false) ){
     return -1
   }else{
     return 0;
   }
 }
 