var canvas;
var B1,b2,b3,b4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    b1 = createSprite(0,580,360,30);
    b1.shapeColor = rgb(0,0,255);

    b2 = createSprite(295,580,200,30);
    b2.shapeColor = rgb(255,128,0);

    b3 = createSprite(515,580,200,30);
    b3.shapeColor = rgb(153,0,76);

    b4 = createSprite(740,580,220,30);
    b4.shapeColor = rgb(0,100,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(b1.isTouching(ball) && ball.bounceOff(b1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(b2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(b3.isTouching(ball) && ball.bounceOff(b3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(b4.isTouching(ball) && ball.bounceOff(b4)){
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
