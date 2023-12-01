nose_x=0;
nose_y=0;
difference=0;
lwristx=0;
rwristx=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(50,100);

    canvas = createCanvas(550,500);
    canvas.position(800,150);

    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('POSENET MODEL IS INITIALIZED');
}
function draw(){
    background('#FF6347');
    document.getElementById("square_size").innerHTML="Width and height of the text size will be = "+difference +"px";
    font=document.getElementById("name").value;
    textSize(difference);
    fill("#FFFADA");
    text(font,nose_x,nose_y);
}
function gotPoses(results){
if(results.length > 0){ 
  console.log(results);
  nose_x=results[0].pose.nose.x;
  nose_y=results[0].pose.nose.y;
  console.log("nose_x = " + nose_x , "nose_y = " +nose_y);
  lwristx=results[0].pose.leftWrist.x;
  rwristx=results[0].pose.rightWrist.x;
  difference= floor(lwristx-rwristx);
  console.log("left_wrist_x = " + lwristx , "right_wrist_x = " +rwristx , "difference = "+difference);
}
}
