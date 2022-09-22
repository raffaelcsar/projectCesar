
let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ',', '.'];


var desloc = 1;
let text = "Ola meu nome rafael";


function trans() {
  var p = [];
  var tamText = text.length
  for (let i = 0; i < tamText; i++) {
    if (arr.indexOf(text[i]) != -1) {
      p.push(arr.indexOf(text[i]) + desloc);
    } else {
      console.log("Há caracteres não permitidos, reveja")
    }

    if (p[i] >= arr.length) {
      p[i] = p[i] % 55;
    }
  }
  return p;
}

function crypt() {
  var crypto = [];
  var tamTrans = trans().length;
  for (let i = 0; i < tamTrans; i++) {
    crypto.push(arr[trans()[i]]);
  }
  document.querySelector('.value').innerHTML = crypto.join('');
  return crypto;
};

function descrypt() {
  var descrypto = [];
  var resultDesc = [];
  let tam = crypt().length;
  for (let i = 0; i < tam; i++) {
    descrypto.push(arr.indexOf(crypt()[i]) - desloc)

    if (descrypto[i] <= 0) {
      descrypto[i] = descrypto[i] % 55;
    }
  }
  console.log('Este é o resulta: ', descrypto)

  for (let i = 0; i < descrypto.length; i++) {
    resultDesc.push(arr[descrypto[i]]);
  }
  return document.querySelector('.result').innerHTML = resultDesc.join('');
};

descrypt();