// module aliases
var Engine = Matter.Engine,
//    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];


function setup () {
    createCanvas(600,300);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var option = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, height, width, 10, option)
    World.add(world, ground)
}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, 20, 2));
}

function draw () {
    background(51);
    for (var i = 0; i <boxes.length; i++){
        boxes[i].show();
    }
    stroke(255);
    fill(170);
    strokeWeight(4);
    rect(ground.position.x, ground.position.y, width, height);
}