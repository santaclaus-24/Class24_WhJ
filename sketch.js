//const = constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1, box2, ground;

var box3, box4, box5, pig1, pig2;
var log1, log2, log3, log4, bird;

function setup() {
  //setting up the canvas
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  //creating all the classes
  bird = new Bird(100,100);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(800,160,70,70);

  pig1 = new Pig(810,350);
  pig2 = new Pig(810,220);
  ground = new Ground(600,height,1200,20);

  log1 = new Log(810,260,300,PI/2);
  log2 = new Log(810,180,300,PI/2);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);
}

function draw() {

  //background, 0 = BLACK!
  background(0); 
  Engine.update(myEngine);

//displaying all the classes
  bird.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

  pig1.display()
  pig2.display()
  ground.display()

  log1.display()
  log2.display()
  log3.display()
  log4.display()
}

//JSON = JavaScript Object Notation