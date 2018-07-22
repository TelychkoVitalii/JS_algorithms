var audio = document.querySelector('audio'),
    constraints = {
        audio: true,
        video: false
    };

function handleSuccess(stream) {
    audio.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);