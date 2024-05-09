const decodeTheRing = function (s, p) {

    // write your code here
    let encodingMessage="";
    for(let i=0;i<s.length;i++){
      let charCode=s.charCodeAt(i);
      if((charCode>=65 && charCode<=90) || (charCode >=97 && charCode<=122)){
        let isUpperCase = (charCode >=65 && charCode <=90);
        let base=isUpperCase ? 65 :97;
        encodingMessage +=String.fromCharCode(((charCode - base + p)%26)+base);
      }else if(charCode === 42){
        encodingMessage += String.fromCharCode(charCode);
      }else if(charCode === 63){
        encodingMessage += String.fromCharCode(charCode);
      }else{
        encodingMessage += s.charAt(i);
      }
    }
return encodingMessage;
  };

  function decodingMessage(encodingMessage,p){
    return encodingMessage(encodingMessage,26 - p);

  };

  };
  
  module.exports = decodeTheRing;
