var btn = document.getElementById('button');
btn.addEventListener('click', notifyMe);

function notifyMe() {
    console.log(new Notification("Fuck my mama!").permission === 'granted')
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Fuck my mama!");
        notification.onclick = function () {
            console.log('clicked on notification!');
        };
        setTimeout(notification.close.bind(notification), 4000);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
}