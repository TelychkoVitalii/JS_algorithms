// Get array of devices with detailed information
navigator.mediaDevices.enumerateDevices()
    .then(function (data) {
        console.log(data[0].getCapabilities());
        // MediaTrackSettings - https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings
    });

// Get object of media tracks settings like brightness, volume etc.
// https://developer.mozilla.org/ru/docs/Web/API/MediaDevices/getSupportedConstraints
navigator.mediaDevices.getSupportedConstraints();

// The MediaDevices getUserMedia() method prompts the user for permission to use a media input which produces a MediaStream with tracks containing the requested types of media.
var constraints = {
    audio: false,
    video: { width: 1280, height: 720, frameRate: { ideal: 10, max: 15 } }
};

// for webcam video
navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
        var video = document.createElement('video');
        video.srcObject = mediaStream;
        document.body.appendChild(video);
        video.onloadedmetadata = function() {
            video.play();
        };
    });


























// var video = document.querySelector('video'),
//     constraints = window.constraints = {
//         audio: false,
//         video: true
//     },
//     errorElement = document.querySelector('#errorMsg');
// navigator.mediaDevices.getUserMedia(constraints)
//     .then(function (stream) {
//         var videoTracks = stream.getVideoTracks();
//         console.log('Got stream with constraints:', constraints);
//         console.log('Using video device: ' + videoTracks[0].label);
//         stream.onended = function() {
//             console.log('Stream ended');
//         };
//         window.stream = stream; // make variable available to browser console
//         video.srcObject = stream;
//     })
//     .catch(function(error) {
//         if (error.name === 'ConstraintNotSatisfiedError') {
//             errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
//                 constraints.video.width.exact + ' px is not supported by your device.');
//         } else if (error.name === 'PermissionDeniedError') {
//             errorMsg('Permissions have not been granted to use your camera and ' +
//                 'microphone, you need to allow the page access to your devices in ' +
//                 'order for the demo to work.');
//         }
//         errorMsg('getUserMedia error: ' + error.name, error);
//     });
//
// function errorMsg(msg, error) {
//     errorElement.innerHTML += '<p>' + msg + '</p>';
//     if (typeof error !== 'undefined') {
//         console.error(error);
//     }
// }