const cipher = {
  encode(offset, msg){
    if (msg == ""){ throw new TypeError;}
    let letter;
    let msgEncode = "";
    for(let i = 0; i < msg.length; i++){
      letter = msg.charCodeAt(i);
      msgEncode += String.fromCharCode(getLetter(letter,offset));
    }
    return msgEncode;
  },
  decode(offset,msg){
    if (msg == ""){ throw new TypeError;}
    offset *= -1;
    let letter;
    let msgDecode = "";
    for(let i = 0; i < msg.length; i++){
      letter = msg.charCodeAt(i);
      msgDecode += String.fromCharCode(getLetter(letter,offset));
    }
    return msgDecode;
  }
};

function getLetter(letter, offset){
  let idLetter = letterValidate(letter);
  let quantityLetter = 26;
  if(idLetter === 0){ return letter;}
  if(idLetter === 48){ quantityLetter = 10;}
  let position = (letter - idLetter + offset) % quantityLetter;
  if(position < 0){ position = quantityLetter + position;}
  return (position + idLetter);
}

function letterValidate(letter){
  let idLetter = 0; 
  if(letter >=65 && letter<=90){ idLetter = 65;} 
  if(letter >=97 && letter<=122){ idLetter = 97;} 
  if(letter >=48 && letter<=57){ idLetter = 48;}
  return idLetter;
}


