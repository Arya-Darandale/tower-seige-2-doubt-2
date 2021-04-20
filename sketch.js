
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;

function preload(){

    poly_img = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,300,250,10);

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    

    //box6 = new Box(330,195,30,40);
    box7 = new Box(360,195,30,40);
    box8 = new Box(390,195,30,40);
    box9 = new Box(420,195,30,40);
    box10 = new Box(390,155,30,40);
    
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new Slingshot(ball, {x:100,y:200})
}

function draw(){
    background("white");

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   // box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    imageMode(CENTER);
    image(poly_img, ball.position.x,ball.position.y, 40,40)

    slingshot.display();


    Engine.update(engine);

}

function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});

}

function mouseReleased(){
slingshot.fly();
}