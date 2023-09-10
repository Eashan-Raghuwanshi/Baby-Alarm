img = "";
status = "";
objects = [];

function preload()
{
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide(); 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(video, 0, 0, 380, 380);
    
    if(status != "")
    {
        objectDetector.detect(video, gotResult)
    for (i=0; i< objects.length; i++)
    {   
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label = "" + percent + "%", objects[i].x, objects[i].y);
        noFill();
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    document.getElementById("status").innerHTML = "Status : Baby Detected";
    audio.stop(alarm.mp3);

    document.getElementById("status").innerHTML = "Status : Baby Detected";
    audio.play(alarm.mp3);
}
}
if(objects < 0)
{
    document.getElementById("status").innerHTML = "Status : Baby Not Detected";
    audio.play(alarm.mp3);
}  
