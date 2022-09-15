var ball;
var ground;
var leftSide,rightSide ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

 var ball_option={
 restitution:0.3,
 density:1.2,
 friction:0
 
 }
 ball=Bodies.circle(260,100,20,ball_option)
 World.add(world,ball)
 ground=new Ground(width/2,670,width,20)
 rightSide=new Ground (1350,600,20,120)
 leftSide=new Ground (1100,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.display();
  rightSide.display();
  leftSide.display();
 ellipse(ball.position.x,ball.position.y,20,20);
  
}

function  keyPressed () {
	if(keyCode == UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}

}



