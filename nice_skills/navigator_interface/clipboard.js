const p = document.createElement('p');
p.id = 'p';
p.innerText = 'Copy Text!';
document.body.appendChild(p);

p.addEventListener('click', copyElement);

function copyElement() {
    return navigator.clipboard.writeText(p.innerText)
        .then(() => console.log('Success!'))
        .catch(() => console.error('Bad!'));
}

