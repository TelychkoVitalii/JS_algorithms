var first = document.querySelector('#number1'),
    second = document.querySelector('#number2'),
    result = document.querySelector('.result'),
    myWorker;

if (window.Worker) {
    myWorker = new Worker("worker.js");

    first.onchange = function() {
        myWorker.postMessage([first.value,second.value]); // Sending message as an array to the worker
        console.log('Message posted to worker');
        // myWorker.terminate();
    };

    second.onchange = function() {
        myWorker.postMessage([first.value,second.value]);
        console.log('Message posted to worker');
    };

    myWorker.onmessage = function(e) {
        result.textContent = e.data;
        console.log('Message received from worker');
    };
}