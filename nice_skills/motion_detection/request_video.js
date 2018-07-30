function requestVideo() {
    const constraints = {
        audio: false,
        video: {width: 640, height: 480}
    }, video = document.getElementById('video');

    navigator.mediaDevices.getUserMedia(constraints)
        .then(success)
        .then(error);

    function success(stream) {
        video.srcObject = stream;
    }

    function error(error) {
        if (error) {
            throw new Error(error);
        }
    }
}

