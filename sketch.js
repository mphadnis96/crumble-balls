
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 


var ground,dustBin,paper; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 

	ground=new Ground(400,670,800); 
	paper=new Paper(100,400,5);   
	dustBin=new DustBin(500,630); 


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display(); 
  ground.display();  
  dustBin.display(); 

  if(keyWentDown("up")){ 	  
	   Matter.Body.applyForce(paper.body, paper.body.position, {x: 13, y: -13});  
	 }
 
} 





