window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var pc = new RTCPeerConnection({iceServers: []}), noop = function () {};
pc.createDataChannel('');
pc.createOffer(pc.setLocalDescription.bind(pc), noop);
pc.onicecandidate = function (ice) {
    if(!ice || !ice.candidate || !ice.candidate.candidate) return;
    var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
    alert('Local IP: ' + myIP);
    pc.onicecandidate = noop;
};

