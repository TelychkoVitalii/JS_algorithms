const canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      width = 640,
      height = 480,
      sample_size = 10,
      previous_frame = [],
      threshold = 50;

function capture() {
    ctx.drawImage(video, 0, 0, width, height);
    var data = ctx.getImageData(0, 0, width, height).data, y, x;
    for(y = 0; y < height; y += sample_size) {
        for(x = 0; x < width; x += sample_size) {
            var pos = (x + y * width) * 4,
                r = data[pos],
                g = data[pos],
                b = data[pos];

            if(previous_frame[pos] && Math.abs(previous_frame[pos] - r) > threshold) {
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.strokeRect(x, y, sample_size, sample_size);
            }

            previous_frame[pos] = r;
        }
    }
}

setInterval(capture, 100);
requestVideo();