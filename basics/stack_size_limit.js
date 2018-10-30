var div = document.createElement('div'), i = 0;
document.body.appendChild(div);

setTimeout(function() {
    div.innerHTML = i;
}, 1000);

function inc() {
    i++;
    inc();
}
inc();