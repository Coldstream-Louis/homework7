// Variables!
var color ="red";
var radius = 15;
//You will want to add more
var x = 0;
var y = 0;

var canvas = document.querySelector('#canvas');
canvas.width = (window.innerWidth) * 0.75;
canvas.height = (window.innerHeight) * 0.75;

var ctx = canvas.getContext("2d");
var clr = document.querySelector("#clr");
var is_drawing = true;

//Listeners!!
//Add a listener for loading the window
window.addEventListener('load', function(e) {
    ctx.fillStyle = color;
    draw();
});

//Add a listener for the mouse movement
window.addEventListener('mousemove',function(e) {
    if(is_drawing == true){
        x = e.x;
        y = e.y;
        draw();
    }
});

//Add a listener for the touch move
window.addEventListener('touchmove', function (e) {
    // x = e.pageX;
    // y = e.pageY;
    x = e.touches[0].pageX - e.touches[0].target.offsetLeft;
    y = e.touches[0].pageY - e.touches[0].target.offsetTop;
    draw()
})


clr.addEventListener("input", function(e){
    ctx.fillStyle = clr.value;
});

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
    console.log("In Keydown");
    console.log(e.keyCode);

    if(e.keyCode == 66){
        console.log("Drawing blue");
        ctx.fillStyle = "#0000FF";
    }
    else if(e.keyCode == 82){
        console.log("Drawing red");
        ctx.fillStyle = "#FF0000";
    }

    else if(e.keyCode == 71){
        console.log("Drawing green");
        ctx.fillStyle = "#00FF00";
    }
    else if(e.keyCode == 89){
        console.log("Drawing yellow");
        ctx.fillStyle = "#FFFF00";
    }
    else if(e.keyCode == 40){
        console.log("place the pen");
        is_drawing = true;
    }
    else if(e.keyCode == 38){
        console.log("lift the pen");
        is_drawing = false;
    }
    else if(e.keyCode == 32){
        console.log("clear all colors on the canvas");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
})

// Functions!
// I would add a function for draw
function draw(){
    console.log("drawing");
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
}