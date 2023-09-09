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
}

function start()
{
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
        console.log(error);12
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(video, 0, 0, 380, 380);
    
    for (i=0; i< objects.length; i++)
    {
    if(status = "")
    {
       document.getElementById("status").innerHTML = "Status : Baby Detected";
        sound.stop(alarm.mp3);
    } else(status!= "")
    {
        document.getElementById("status").innerHTML = "Status : Baby Detected";
        sound.play(alarm.mp3);
    }
    }
    if(objects < 0)
    {
        document.getElementById("status").innerHTML = "Status : Baby Not Detected"
    }  
    }


