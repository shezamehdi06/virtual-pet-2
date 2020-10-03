var dog;
var database;
var position;
var foodStock;
var lastFed;

function preload(){
preload.image(dongmg.png);
preload.image(dogmg1.png);
}

function setup(){
    createCanvas(500,500);
    database=firebase.database ();
    dog = createSprite(250,250,10,10);
    dog.shapeColor = "red";

var dogpositionref=database.ref('dog/position');
dogpositionref.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}}

function changePosition(x,y){
    database.ref("dog/position").update({
        'x':dog.x+x,
        'y':dog.y+y
    })

}
function readposition(data){
position=data.val();
dog.x=position.x
dog.y=position.y
}
