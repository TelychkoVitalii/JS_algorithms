var btn = document.getElementById('button'), newWin,
    text = document.getElementById('text'),
    button_close = document.getElementById('button_close'),
    btn_newWin = document.createElement('button');

function open_frame() {
  newWin = window.open('about:blank', "hello", "left=100,top=100,width=600,height=600");
  btn_newWin.innerText = 'Close';
  btn_newWin.id = 'close';
  newWin.document.body.appendChild(btn_newWin);
  btn_newWin.addEventListener('click', close_frame);

  function close_frame() {
    newWin.close();
    newWin.document.write(
      "<script>window.opener.document.body.children[2].innerHTML = 'Iframe is closed!'</script>");
  }
}

function close_win() {
  window.close();
}

button_close.addEventListener('click', close_win);
btn.addEventListener('click', open_frame);