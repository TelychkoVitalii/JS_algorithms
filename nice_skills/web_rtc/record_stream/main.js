const recordedVideo = document.querySelector('video#recorded'),
      recordButton = document.querySelector('button#record'),
      playButton = document.querySelector('button#play'),
      downloadButton = document.querySelector('button#download'),
      gumVideo = document.querySelector('video#gum'),
      constraints = { audio: true, video: true };

let mediaRecorder, recordedBlobs, sourceBuffer;

recordedVideo.addEventListener('error', function(ev) {
    console.error('MediaRecording.recordedMedia.error()');
    alert(`Your browser can not play ${recordedVideo.src} media clip. event: ${JSON.stringify(ev)}`);
}, true);

recordButton.addEventListener('click', () => {
    if (recordButton.textContent === 'Start Recording') {
        startRecording();
    } else {
        stopRecording();
        recordButton.textContent = 'Start Recording';
        playButton.disabled = false;
        downloadButton.disabled = false;
    }
});

playButton.addEventListener('click', () => {
    const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
    recordedVideo.src = window.URL.createObjectURL(superBuffer);
    recordedVideo.volume = 1.0;
    recordedVideo.addEventListener('loadedmetadata', () => {
        recordedVideo.play();
    });
});

downloadButton.addEventListener('click', () => {
    const blob = new Blob(recordedBlobs, {type: 'video/webm'}),
          url = window.URL.createObjectURL(blob),
          a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.webm';
    // document.body.appendChild(a);
    a.click();
    // setTimeout(() => {
    //     // document.body.removeChild(a);
    //     window.URL.revokeObjectURL(url);
    // }, 100);
});

// window.isSecureContext could be used for Chrome
let isSecureOrigin = location.protocol === 'https:' || location.hostname === 'localhost';
if (!isSecureOrigin) {
    alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.\n\nChanging protocol to HTTPS');
    location.protocol = 'HTTPS';
}

function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
    }
}

function startRecording() {
    recordedBlobs = [];
    let options = {mimeType: 'video/webm;codecs=vp9'};
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + ' is not Supported');
        options = {mimeType: 'video/webm;codecs=vp8'};
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + ' is not Supported');
            options = {mimeType: 'video/webm'};
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                console.log(options.mimeType + ' is not Supported');
                options = {mimeType: ''};
            }
        }
    }
    try {
        mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e) {
        console.error(`Exception while creating MediaRecorder: ${e}`);
        alert(`Exception while creating MediaRecorder: ${e}. mimeType: ${options.mimeType}`);
        return;
    }
    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    recordButton.textContent = 'Stop Recording';
    playButton.disabled = true;
    downloadButton.disabled = true;
    // mediaRecorder.onstop = handleStop; not neccessary
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    console.log('MediaRecorder started', mediaRecorder);
}

function stopRecording() {
    mediaRecorder.stop();
    console.log('Recorded Blobs: ', recordedBlobs);
    recordedVideo.controls = true;
}

function handleSuccess(stream) {
    recordButton.disabled = false;
    console.log('getUserMedia() got stream: ', stream);
    window.stream = stream;
    gumVideo.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

// function handleStop(event) {
//     console.log('Recorder stopped: ', event);
// }

// const mediaSource = new MediaSource(),
// mediaSource.addEventListener('sourceopen', handleSourceOpen, false);
// function handleSourceOpen() {
//     console.log('MediaSource opened');
//     sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
//     console.log('Source buffer: ', sourceBuffer);
// }