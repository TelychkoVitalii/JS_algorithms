var cipherText;

function caesarsCipherCrypt(str, key) {
    var i = 0, toUp = str.toUpperCase(), size = toUp.length, newStr = [];
    for(; i < size; i += 1) {
        var toCode = toUp[i].charCodeAt(0);
        if(toCode < 65 || toCode > 90) {
            newStr[i] = String.fromCharCode(toCode);
        } else if(toCode < 78) {
            newStr[i] = String.fromCharCode(toCode + key);
        } else {
            newStr[i] = String.fromCharCode(toCode - key);
        }
    }

    cipherText = newStr.join('');
    return cipherText;
}

caesarsCipherCrypt('HELLO', 10);

function caesarsCipherEncrypt(str) {
    var i = 0, toUp = str.toUpperCase(), size = toUp.length, newStr = [];
    for(; i < size; i += 1) {
        var toCode = toUp[i].charCodeAt(0);
        if(toCode < 65 || toCode > 90) {
            newStr[i] = String.fromCharCode(toCode);
        } else if(toCode < 78) {
            newStr[i] = String.fromCharCode(toCode + 10);
        } else {
            newStr[i] = String.fromCharCode(toCode - 10);
        }
    }

    cipherText = newStr.join('');
    return cipherText;
}

caesarsCipherEncrypt(cipherText);
