var first = document.querySelector('#number1'),
    second = document.querySelector('#number2'),
    result1 = document.querySelector('.result1'),
    myWorker;

if (!!window.SharedWorker) {
    myWorker = new SharedWorker("shared_worker.js");

    first.onchange = function() {
        myWorker.port.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    };

    second.onchange = function() {
        myWorker.port.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    };

    myWorker.port.onmessage = function(e) {
        result1.textContent = e.data;
        console.log('Message received from worker');
        console.log(e);
    }
}