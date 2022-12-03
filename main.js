video = "";

function preload() {
    video = createVideo('carshowvideo_trimmed.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(426, 240);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 426, 240);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("model loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}