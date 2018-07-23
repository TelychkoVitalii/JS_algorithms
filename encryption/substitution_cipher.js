var map = {
    a: 'q', b: 'w', c: 'e',
    d: 'r', e: 't', f: 'y',
    g: 'u', h: 'i', i: 'o',
    j: 'p', k: 'a', l: 's',
    m: 'd', n: 'f', o: 'g',
    p: 'h', q: 'j', r: 'k',
    s: 'l', t: 'z', u: 'x',
    v: 'c', w: 'v', x: 'b',
    y: 'n', z: 'm'
}, text = 'Hello World!';

function substitutionCipherCrypt(text) {
    return text.split('').filter(function(v) {
            return map.hasOwnProperty(v.toLowerCase());
        }).map(function(v) {
            return map[v.toLowerCase()].toUpperCase();
        }).join('');
}

substitutionCipherCrypt(text);