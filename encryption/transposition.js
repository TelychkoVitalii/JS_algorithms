function reverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

reverseInPlace('I am the good boy');