video = "";
objects = [];
status = "";

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
    if (status != "")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width. objects[i].height);
        }
    }
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

function gotResult (error, results) {
    if (error){
        console.error;
    }else{
        console.log(results);
    }
    objects = results;
}
