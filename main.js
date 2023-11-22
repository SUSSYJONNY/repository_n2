function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(260, 250);
    video = createCapture(VIDEO)
    video.hide()
    tint_color = "";
}
function draw(){
    image(video, 0, 0, 640, 480)
    fill("purple")
    circle(80, 50,100)
    fill("purple")
    circle(600, 50,100)
    rect(100, 50, 600, 20)
    rect(100, 400, 600, 20)
    rect(100, 100, 20, 600)
    rect(600, 100, 20, 600)
    circle(600, 400 ,100)
    circle(80, 400,100)
    tint(tint_color)

}

function snapshot(){
    save('photo.png')
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}