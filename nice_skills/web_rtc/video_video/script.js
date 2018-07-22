let leftVideo = document.getElementById('leftVideo'),
    rightVideo = document.getElementById('rightVideo'),
    stream;

function maybeCreateStream() {
    if(stream) return;
    if(leftVideo.captureStream) {
        stream = leftVideo.captureStream();
        rightVideo = stream;
    }
}

leftVideo.oncanplay = maybeCreateStream;