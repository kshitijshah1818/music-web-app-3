song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("song2.mp3.mp3");
}
function setup(){
    canvas=createCanvas(500,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('model is initiated');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    rightwristx=results[0].pose.rightWrist.x;
    rightwristx=results[0].pose.rightWrist.y;
    
    console.log('LEFT WRIST X '+leftwristx +'LEFT WRIST Y '+leftwristy);
    console.log('RIGHT WRIST X '+rightwristx + 'RIGHT WRIST Y '+ rightwristy);
}
}
function draw(){
    image(video,0,0,500,600);
}
function play(){
    song2.play();
}