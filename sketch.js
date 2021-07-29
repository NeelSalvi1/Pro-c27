
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);

	
  plane= new Plane(600,height,1200,30);
  hammer= new Hammer(200,300,10,5);
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  plane.display();
  drawSprites();
 
}



