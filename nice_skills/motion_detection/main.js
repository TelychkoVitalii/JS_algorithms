var
    // Store the first HTML5 video element in the document
    video = document.querySelector('video'),
    // We use this to time how long things are taking. Not that important..
    time_dump = document.getElementById("elapsed_time"),
    // Create a new image that will be our goofy glasses
    glasses = new Image(),
    // Store the canvas so we can write to it
    canvas = document.getElementById("output"),
    // Get the canvas 2d Context
    ctx = canvas.getContext("2d");
// Finally set the source of our new glasses img element
glasses.src = "i/glasses.png";