const startButton = document.getElementById('startButton'),
      callButton = document.getElementById('callButton'),
      hangupButton = document.getElementById('hangupButton'),
      localVideo = document.getElementById('localVideo'),
      remoteVideo = document.getElementById('remoteVideo'),
      offerOptions = { offerToReceiveAudio: 1, offerToReceiveVideo: 1 },
      constraints = { audio: true, video: true };

callButton.disabled = true;
hangupButton.disabled = true;
startButton.onclick = start;
callButton.onclick = call;
hangupButton.onclick = hangup;

let localStream, pc1, pc2;

function gotStream(stream) {
    localVideo.srcObject = stream;
    localStream = stream;
    callButton.disabled = false;
}

function gotError(error) {
    console.log(error);
}

function start() {
    startButton.disabled = true;
    navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(gotError);
}

function call() {
    callButton.disabled = true;
    hangupButton.disabled = false;

    const servers = null;
    pc1 = new RTCPeerConnection(servers);
    pc1.onicecandidate = function (event) {
        onIceCandidate(pc1, event);
    };

    pc2 = new RTCPeerConnection(servers);
    pc2.onicecandidate = function (event) {
        onIceCandidate(pc2, event);
    };

    pc1.oniceconnectionstatechange = function(event) {
        onIceStateChange(pc1, event);
    };
    pc2.oniceconnectionstatechange = function(event) {
        onIceStateChange(pc2, event);
    };
    pc2.ontrack = gotRemoteStream;

    localStream.getTracks().forEach(function (track) {
        pc1.addTrack(track, localStream);
    });

    pc1.createOffer(offerOptions).then(onCreateOfferSuccess, onCreateSessionDescriptionError);
}

function onCreateSessionDescriptionError(error) {
    console.log(`Failed to create session description: ${error.toString()}`);
}

function onCreateOfferSuccess(desc) {
    pc1.setLocalDescription(desc).then(() => console.log(pc1), console.log('error'));
    pc2.setRemoteDescription(desc).then(() => console.log(pc2), console.log('error'));
    pc2.createAnswer().then(onCreateAnswerSuccess, onCreateSessionDescriptionError);
}

function onCreateAnswerSuccess(desc) {
    pc2.setLocalDescription(desc).then(() => console.log(pc2), console.log('error'));
    pc1.setRemoteDescription(desc).then(() => console.log(pc1), console.log('error'));
}

function onIceCandidate(pc, event) {
    getOtherPc(pc).addIceCandidate(event.candidate)
        .then(() => console.log(pc), err => console.log(pc, err));
}

function onIceStateChange(pc, event) {
    if (pc) {
        console.log('ICE state change event: ', event);
    }
}

function getOtherPc(pc) {
    return (pc === pc1) ? pc2 : pc1;
}

function gotRemoteStream(e) {
    if (remoteVideo.srcObject !== e.streams[0]) {
        remoteVideo.srcObject = e.streams[0];
    }
}


function hangup() {
    pc1.close();
    pc2.close();
    pc1 = null;
    pc2 = null;
    hangupButton.disabled = true;
    callButton.disabled = false;
}

